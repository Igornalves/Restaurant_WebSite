import styled from "styled-components";
import { themeDefault } from "../../global/themes/default";

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Image = styled.img`
    width: 185px;
    border-radius: 1000px;
    margin-bottom: 30px;
`

export const ConteinerText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 16px;
    /* background-color: red; */
`

export const Heading = styled.header`
    color: ${themeDefault.colors.Primary};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 28px;
    margin-bottom: 7px;
`

export const Text = styled.text`
    color: ${themeDefault.colors.Primary};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
`