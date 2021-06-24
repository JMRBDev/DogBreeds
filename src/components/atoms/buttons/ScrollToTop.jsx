import React, { useState } from 'react';
import styled from 'styled-components';
import {HiArrowCircleUp} from 'react-icons/hi';

const StyledScrollToTop = styled.button`
    position: fixed;
    border-radius: 50%;
    border: none;
    width: 3rem;
    height: 3rem;
    bottom: 2rem;
    right: 2rem;
    background-color: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.lightWhite};
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const ScrollToTop = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    
    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    const toggleVisibility = () => {
        if (window.pageYOffset >= 300) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    window.addEventListener('scroll', toggleVisibility);

    return (
        <>
            {showScrollToTop
            && (
                <StyledScrollToTop isShown={showScrollToTop} onClick={handleScrollToTop}>
                    <HiArrowCircleUp />
                </StyledScrollToTop>
            )
            }
        </>
    );
};

export default ScrollToTop;
