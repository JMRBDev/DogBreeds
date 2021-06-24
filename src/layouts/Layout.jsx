import React from 'react';
import PropTypes from 'prop-types';

import NavBar from 'components/organisms/navBar/NavBar';
import Footer from 'components/organisms/footer/Footer';
import styled from 'styled-components';
import ScrollToTop from 'components/atoms/buttons/ScrollToTop';
import { useSelector } from 'react-redux';
import Title from 'components/atoms/helmet/Title';
import toUpperCase from 'util/toUpperCase';

const StyledContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMainContent = styled.main`
  position: relative;
  flex: 1;
  display: flex;
`;

const Layout = ({ children }) => {
    const {currentBreed, currentSubBreed} = useSelector(({breed}) => breed);

    return (
        <>
            <Title
                title={
                    `${(currentBreed)
                        ? toUpperCase(currentBreed)
                        : ''}${(currentSubBreed)
                        ? `, ${toUpperCase(currentSubBreed)}`
                        : ''
                    }`
                }
            />
            <StyledContentContainer>
                <NavBar />
                <StyledMainContent>
                    <ScrollToTop />
                    {children}
                </StyledMainContent>
                <Footer />
            </StyledContentContainer>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
