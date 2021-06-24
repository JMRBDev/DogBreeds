import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.lightWhite};
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 0.3rem;
    box-shadow: 0rem 0.3rem 0.3rem -0.2rem rgba(0, 0, 0, 0.7);
    transition: box-shadow 150ms ease, transform 150ms ease;

    :hover {
      box-shadow: 0rem 0.4rem 0.3rem -0.2rem rgba(0, 0, 0, 0.7);
      transform: translateY(-0.1rem);
    }

    :active {
      box-shadow: 0rem 0.1rem 0.5rem 0.1rem inset rgba(0, 0, 0, 0.7);
      transform: translateY(0.1rem);
    }
`;

export default StyledButton;