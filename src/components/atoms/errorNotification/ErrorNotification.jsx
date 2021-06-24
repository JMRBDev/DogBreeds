import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as APP_STATES from 'enums/APP_STATES';
import styled from 'styled-components';
import { deleteError, setCurrentState } from 'redux/reducers/appSlice';

const StyledErrorNotification = styled.div`
    position: fixed;
    inset: auto 5rem 8rem;
    background-color: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.lightWhite};
    padding: 1rem;
    border-radius: 0.3rem;
    transform: translateY(100px);
    animation: slide-up 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    z-index: 1000;

    @keyframes slide-up {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-50px);
        }
    }
`;

const StyledCloseNotificationButton = styled.button`
    position: absolute;
    background-color: transparent;
    color: ${({theme}) => theme.colors.darkWhite};
    font-weight: 700;
    font-size: 1rem;
    inset: 0.2rem 0.5rem auto auto;
    border: none;
`;

const ErrorNotification = () => {
    const {currentState, currentError} = useSelector(({app}) => app);
    const dispatch = useDispatch();

    const handleRejectNotification = () => {
        dispatch(setCurrentState(APP_STATES.READY));
        dispatch(deleteError());
    };

    return (
        <>
            {(currentState === APP_STATES.ERROR_LOADING && currentError)
            && (
                <StyledErrorNotification>
                    {currentError}
                    <StyledCloseNotificationButton onClick={handleRejectNotification}>
                        &#x2716;
                    </StyledCloseNotificationButton>
                </StyledErrorNotification>
            )
            }
        </>
    );
};

export default ErrorNotification;
