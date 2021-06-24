import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CardPlaceholder from 'components/atoms/placeholders/CardPlaceholder';

import * as APP_STATES from 'enums/APP_STATES';

const StyledCardsGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 15rem);
    justify-content: space-between;
    grid-gap: 2rem;

    > div, > svg {
      min-height: 15rem;
      min-width: 15rem;
    }

    ${({ theme }) => theme.breakpoints.sm} {
      justify-content: center;
    }
`;

const CardsGrid = ({children}) => {
    const {currentState} = useSelector(({app}) => app);

    return (
        <StyledCardsGrid>
            {currentState === APP_STATES.READY && children}
            {currentState === APP_STATES.LOADING && (
                [...Array(3)].map((_, i) => (<CardPlaceholder key={`placeholder-${i}`} />))
            )}
        </StyledCardsGrid>
    );
};

CardsGrid.propTypes = {
    children: PropTypes.node,
};

export default CardsGrid;
