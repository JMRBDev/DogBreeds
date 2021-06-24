import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        font-family: Inter, sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
    }
    body {
        background-color: ${({ theme }) => theme.primaryBgColor};
        color: ${({ theme }) => theme.textColor};
    }
    body, nav, footer, select {
        transition: color 150ms ease, background-color 150ms ease;
    }
    main, nav, footer {
        padding: 2rem 8rem;

        ${({ theme }) => theme.breakpoints.sm} {
            padding: 2rem;
        }
    }
    button, a {
        cursor: pointer;
    }
`;

export default GlobalStyle;