import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSocialItem = styled.li`
    cursor: pointer;
    font-size: 1.4rem;
    margin: 0 0.6rem;
    transition: transform 150ms ease;

    :hover {
        color: ${({theme}) => theme.colors.red};
        transform: translateY(-0.1rem);
    }

    > a {
        color: unset;
    }
`;

const SocialMenuItem = ({link, icon: Icon}) => (
    <StyledSocialItem>
        <a href={link} target='_blank' rel='noreferrer'>
            <Icon />
        </a>
    </StyledSocialItem>
);

SocialMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
};

export default SocialMenuItem;
