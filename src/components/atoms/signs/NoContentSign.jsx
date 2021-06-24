import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

const StyledNoContentSignContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const StyledNoContentTitle = styled.span`
    font-weight: 700;
    font-size: 1.5rem;
`;

const StyledNoContentSubtitle = styled.span`
    color: ${({theme}) => theme.colors.blue};
`;

const NoContentSign = ({t}) => (
    <StyledNoContentSignContainer>
        <StyledNoContentTitle>{t('no_content')}</StyledNoContentTitle>
        <StyledNoContentSubtitle>{t('use_filters')}</StyledNoContentSubtitle>
    </StyledNoContentSignContainer>
);

NoContentSign.propTypes = {
    t: PropTypes.func,
};

export default withTranslation()(NoContentSign);
