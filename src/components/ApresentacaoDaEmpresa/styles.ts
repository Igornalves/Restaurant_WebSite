import styled from "styled-components";
import { themeDefault } from "../../global/themes/default";

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Image = styled.img`
    width: 11.563rem;
    border-radius: 62.5rem;
    margin-bottom: 1.875rem;
`

export const ConteinerText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
    /* background-color: red; */
`

export const Heading = styled.header`
    color: ${themeDefault.colors.Primary};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 28px;
    margin-bottom: 0.438rem;
`

export const Text = styled.text`
    color: ${themeDefault.colors.Primary};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
`