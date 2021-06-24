import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'styles/globals';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

const common = {
    colors: {
        red: '#FF004E',
        blue: '#16C9FF',
        yellow: '#FED813',
        darkPurple: '#17142F',
        lightPurple: '#595484',
        lightWhite: '#FFFFFF',
        darkWhite: '#EDF0FA',
        black: '#0F0F0F',
        lightGray: '#BFBFBF',
        darkGray: '#878787',
    },
    breakpoints: {
        sm: '@media (max-width: 900px)',
        xl: '@media (max-width: 1200px)',
    },
};

const themes = {
    light: {
        current: 'light',
        ...common,
        primaryBgColor: common.colors.lightWhite,
        secondaryBgColor: common.colors.darkWhite,
        textColor: common.colors.black,
        placeholderColor: common.colors.darkGray,
    },
    dark: {
        current: 'dark',
        ...common,
        primaryBgColor: common.colors.darkPurple,
        secondaryBgColor: common.colors.lightPurple,
        textColor: common.colors.lightWhite,
        placeholderColor: common.colors.lightGray,
    },
};

const Theme = ({ children }) => {
    const {preferences: {theme}} = useSelector(({app}) => app);
    const localStorageTheme = window.localStorage.getItem('theme');

    return (
        <ThemeProvider theme={themes[localStorageTheme] || themes[theme]}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

Theme.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Theme;