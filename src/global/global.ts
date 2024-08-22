import { createGlobalStyle } from "styled-components"
import { themeDefault } from "./themes/default"

export const GlobalDefault = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${themeDefault.colors.Secondary};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1rem;
    }
`