import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSwitchButton = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    width: 3rem;
`;

const StyledSwitchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.5rem;
    padding: 0 0.1rem;
    border-radius: 1rem;
    background-color: ${({theme, isOn}) => isOn ? `${theme.colors.red}FF` : `${theme.colors.red}55`};
    transition: all 200ms ease;
`;

const StyledCheckState = styled.div`
    line-height: 0;
    opacity: 0;
    transition: opacity 300ms ease;

    :first-child {
        opacity: ${({isOn}) => isOn ? '1' : '0'};
    }

    :last-child {
        opacity: ${({isOn}) => isOn ? '0' : '1'};
    }
`;

const StyledSwitchBall = styled.div`
    position: absolute;
    width: calc(50% - 0.2rem);
    aspect-ratio: 1;
    border-radius: 50%;
    transition: all 300ms ease;
    background-color: ${({theme}) => theme.colors.darkWhite};
    border: 0.2rem solid ${({theme}) => theme.colors.lightWhite};
    box-shadow: 0 0 0.2rem -0rem inset rgba(0, 0, 0, 0.2);
    left: ${({isOn}) => isOn ? 'calc(100% - calc(50% - 0.11rem))' : '0.11rem'};
`;

const StyledInput = styled.input`
    display: none;
`;

const SwitchButton = ({isOn, onClick, disabled = false, leftIcon, rightIcon}) => {
    const [checked, setChecked] = useState(isOn);

    const handleToggle = () => {
        if (disabled) {
            return;
        }

        setChecked(!checked);
        onClick();
    };

    return (
        <StyledSwitchButton onClick={handleToggle}>
            <StyledSwitchContainer isOn={isOn}>
                <StyledCheckState isOn={isOn}>
                    {leftIcon}
                </StyledCheckState>
                <StyledCheckState isOn={isOn}>
                    {rightIcon}
                </StyledCheckState>
            </StyledSwitchContainer>
            <StyledSwitchBall isOn={isOn} />
            <StyledInput type='checkbox' aria-checked={isOn} />
        </StyledSwitchButton>
    );
};

SwitchButton.propTypes = {
    isOn: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default SwitchButton;
