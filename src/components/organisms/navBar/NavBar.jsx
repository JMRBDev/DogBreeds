import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import BreedFilters from 'components/molecules/breedFilters/BreedFilters';

const StyledNavBarContainer = styled.nav`
    position: sticky;
    top: 0;
    box-shadow: 0 0.1rem 1rem -0.2rem rgba(0, 0, 0, 0.1);
    background-color: ${({theme}) => theme.primaryBgColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    
    > :last-child {
        margin-left: 3rem;
    }

    ${({ theme }) => theme.breakpoints.sm} {
        flex-direction: column;
        padding: 1rem 2rem;

        > :last-child {
            margin-left: unset;
            margin-top: 2rem;
        }
    }
`;

const StyledNavBarTitleContainer = styled.div`
    > p {
        font-style: italic;
        color: ${({theme}) => theme.colors.red};
    }

    ${({ theme }) => theme.breakpoints.sm} {
        text-align: center;
    }
`;

const NavBar = ({t}) => (
    <StyledNavBarContainer>
        <StyledNavBarTitleContainer>
            <h1>{t('title')}</h1>
            <p>{t('subtitle')}</p>
        </StyledNavBarTitleContainer>
        <BreedFilters />
    </StyledNavBarContainer>
);

NavBar.propTypes = {
    t: PropTypes.func,
};

export default withTranslation()(NavBar);
