import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledButton from 'components/atoms/buttons/styles';

import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';

import { setBreedsList, setCurrentBreed, setCurrentSubBreed } from 'redux/reducers/breedSlice';
import breedsService from 'services/breeds';

import SelectInput from 'components/atoms/inputs/SelectInput';
import { withTranslation } from 'react-i18next';
import { setCurrentError, setCurrentState } from 'redux/reducers/appSlice';

import * as APP_STATES from 'enums/APP_STATES';

const StyledFiltersContainer = styled.div`
  display: flex;

  > :last-child:not(:first-child) {
    margin-left: 0.5rem;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    display: ${({showFilters}) => showFilters ? 'flex' : 'none'};
    flex-direction: column;
    
    > :last-child:not(:first-child) {
      margin-left: unset;
    }
  }
`;

const StyledToggleFilterButton = styled(StyledButton)`
  display: none;
  width: 100%;
  margin-bottom: 0.5rem;

  > svg {
    margin-left: 0.6rem;
    font-size: 1rem;
    font-weight: 900;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
  }
`;

const BreedFilters = ({t}) => {
    const [showFilters, setShowFilters] = useState(true);

    const handleToggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const {currentBreed, currentSubBreed, breedsList} = useSelector(({breed}) => breed);
    const dispatch = useDispatch();

    const handleOnSelectBreed = ({target: {value}}) => {
        dispatch(setCurrentBreed(value));
    };

    const handleOnSelectSubBreed = ({target: {value}}) => {
        dispatch(setCurrentSubBreed(value));
    };

    useEffect(() => {
        const getBreeds = async () => {
            dispatch(setCurrentState(APP_STATES.LOADING));
            const res = await breedsService.listAllBreeds();

            if (res.error) {
                dispatch(setCurrentState(APP_STATES.ERROR_LOADING));
                dispatch(setCurrentError(t('generic_error', {name: res.error})));
            } else {
                dispatch(setBreedsList(res));
                dispatch(setCurrentState(APP_STATES.READY));
            }
        };

        return getBreeds();
    }, [dispatch, t]);

    return (
        <div>
            <StyledToggleFilterButton onClick={handleToggleFilters}>
                {t('toggle_filters')}
                {' '}
                {showFilters
                    ? <IoIosArrowUp />
                    : <IoIosArrowDown />
                }
            </StyledToggleFilterButton>
      
            <StyledFiltersContainer showFilters={showFilters}>
                <SelectInput
                    value={currentBreed || ''}
                    label={t('breed_label')}
                    onChange={handleOnSelectBreed}
                    options={Object.keys(breedsList)}
                >
                    <option value='' disabled hidden>{t('select_option')}</option>
                </SelectInput>

                {
                    (breedsList[currentBreed] && breedsList[currentBreed].length > 0)
            && <SelectInput
                value={currentSubBreed || ''}
                label={t('subbreed_label')}
                onChange={handleOnSelectSubBreed}
                options={breedsList[currentBreed]}
            >
                <option value=''>{t('all_subbreeds')}</option>
            </SelectInput>
                }
            </StyledFiltersContainer>
        </div>
    );
};

BreedFilters.propTypes = {
    t: PropTypes.func,
};

export default withTranslation()(BreedFilters);
