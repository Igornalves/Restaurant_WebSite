import styled from "styled-components";
import { themeDefault } from "../../global/themes/default";

export const Conteiner = styled.div`
    background-color: ${themeDefault.colors.Quinary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16rem;
    height: 2.688rem;
    border-radius: 0.5rem;
`

export const Text = styled.text`
    color: ${themeDefault.colors.Primary};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 17px;
`