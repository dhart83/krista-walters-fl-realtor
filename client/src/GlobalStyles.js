import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* @font-face {
  font-family: 'MyFont';
  src: url('./my-font.woff2') format('woff2'),
    url('./my-font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}

 .hello {
   color: red;
  font-family: 'MyFont';
   background: url('./icon.png');
 } */

    :root {
        --color-primary: #c43642;
        --color-secondary: #36C4B8;
        --color-bg-dark: #f9f9f9;
        --color-text-h: #333;
        --color-text-p: #333;
        --color-link: #696969;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    input,
    textarea {
        padding: 8px 12px;
    }

    ::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
    }

    html {
        scroll-behavior: smooth;
    }

    html, body {
        height: 100%;
    }

    body {
        display: flex;
        align-items: stretch;
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
    }

    #root {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    h1, h2, h3, h3, h4, h5, h6 {
        color: var(--color-text-h);
        font-family: 'DM Serif Display', serif;
        font-weight: normal;
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        line-height: 3rem;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        line-height: 2.5rem;
    }

    p {
        color: var(--color-text-p);
        line-height: 1.75rem;
        margin-bottom: 1.5rem;
    }

    span {
        color: var(--color-secondary);
        font-weight: bolder;
    }

    button {
        padding: .5rem 1.25rem;
        text-transform: uppercase;
        border-color: transparent;
        border-radius: 3px;
        cursor: pointer;
    }

    .btn-primary {
        background-color: var(--color-primary);
        color: white;
    }

    .btn-secondary {
        background-color: white;
        color: var(--color-primary);
        font-weight: bold;
    }

    /* Utility Classes */
    .section {
        padding: 90px 0;
    }

    .container {
        max-width: 1200px;
        margin: auto;
    }

    .bg-dark {
        background-color: var(--color-bg-dark);
    }

    .divider {
        height: 2px;
        background-color: var(--color-secondary);
        width: 80px;
        border-radius: 6px;
        margin: 2rem 0;
    }

    @media (max-width: 1300px) {
        .section {
            padding: 60px 0;
        }
        .container {
            max-width: 1000px;
        }
    }

    @media (max-width: 1080px) {
        .container {
            max-width: 900px;
        }
    }
    
    @media (max-width: 990px) {
        .container {
            margin-inline: 2rem;
        }
    }

    @media (max-width: 340px) {
        h1 {
            font-size: 2.5rem;
        }
        h2 {
            font-size: 2rem;
        }
        p {
            font-size: 14px;
        }
    }

`

export default GlobalStyle
