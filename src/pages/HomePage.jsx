import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setImages } from 'redux/reducers/breedSlice';
import breedsService from 'services/breeds';

import NoContentSign from 'components/atoms/signs/NoContentSign';
import ImageCard from 'components/atoms/cards/ImageCard';
import CardsGrid from 'components/molecules/grids/CardsGrid';
import { setCurrentError, setCurrentState} from 'redux/reducers/appSlice';

import * as APP_STATES from 'enums/APP_STATES';
import { withTranslation } from 'react-i18next';

const HomePage = ({t}) => {
    const {currentBreed, currentSubBreed, images} = useSelector(({breed}) => breed);
    const dispatch = useDispatch();

    useEffect(() => {
        const getImages = async () => {
            dispatch(setCurrentState(APP_STATES.LOADING));
            const res = await breedsService.listImages(currentBreed, currentSubBreed);

            if (res.error) {
                dispatch(setCurrentState(APP_STATES.ERROR_LOADING));
                dispatch(setCurrentError(t('generic_error', {name: res.error})));
            } else {
                dispatch(setImages(res));
                dispatch(setCurrentState(APP_STATES.READY));
            }
        };

        if (currentBreed) {
            return getImages();
        }
    }, [dispatch, t, currentBreed, currentSubBreed]);

    return (
        <>
            {(images && images.length > 0)
                ? (
                    <CardsGrid>
                        {images.map((image, index) => (
                            <ImageCard
                                key={`breed-image-${index}`}
                                img={image}
                                alt={`${t('breed')}: ${currentBreed}${currentSubBreed ? `, ${t('subbreed')}: ${currentSubBreed}` : ''}, ${t('image')} ${t('number')} ${index}`}
                                errorText={t('image_load_error', {index, breed: currentBreed})}
                            />
                        ))}
                    </CardsGrid>
                )
                : (
                    <NoContentSign />
                )
            }
        </>
    );
};

HomePage.propTypes = {
    t: PropTypes.func,
};

export default withTranslation()(HomePage);
