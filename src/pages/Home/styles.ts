import styled from "styled-components";
import { themeDefault } from "../../global/themes/default";

export const Conteiner = styled.div`
    height: 85rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const BackgroundImg = styled.img`
    width: 100%;
    height: 28.5rem;
`

export const DivParaProdutos = styled.div`

`

export const Menu = styled.div`
    width: 100%;
    /* background-color: blue; */
    height: 56.5rem;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
`

export const Rodape = styled.button`
    background-color: red;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Text = styled.text`
    color: ${themeDefault.colors.Primary};
`

export const HeadingText = styled.text`
    font-size: 30px;
    margin-top: 2.8rem;
    margin-bottom: 34px;
    background-color: blue;
    display: flex;
    justify-content: center;
    /* color: ${themeDefault.colors.Primary}; */
`

export const DivEmpresa = styled.div`
    display: flex;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 300px
`
