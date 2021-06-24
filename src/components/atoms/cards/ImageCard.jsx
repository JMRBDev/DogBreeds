import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import CardPlaceholder from 'components/atoms/placeholders/CardPlaceholder';
import { useDispatch } from 'react-redux';
import { setCurrentError, setCurrentState } from 'redux/reducers/appSlice';

import * as APP_STATES from 'enums/APP_STATES';

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 0.6rem;
  box-shadow: 0 0.5rem 1rem -0.5rem ${({theme}) => theme.colors.black};
`;

const ImageCard = ({img, alt, errorText}) => {
    const dispatch = useDispatch();

    const handleOnError = () => {
        dispatch(setCurrentState(APP_STATES.ERROR_LOADING));
        dispatch(setCurrentError(errorText));
    };

    return (
        <StyledCardContainer>
            <LazyLoad
                placeholder={<CardPlaceholder />}
            >
                <StyledImage src={img} alt={alt} onError={handleOnError} />
            </LazyLoad>
        </StyledCardContainer>
    );
};

ImageCard.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    errorText: PropTypes.string,
};

export default ImageCard;
