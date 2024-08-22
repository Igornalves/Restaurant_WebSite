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
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto ;
    /* background-color: blue; */
`

export const Menu = styled.div`
    width: 100%;
    display: flex;
    height: 56.5rem;
    flex-direction: column;
    overflow-y: scroll;
    height: 85rem;
    scrollbar-width: none;
    /* background-color: blue; */
    /* justify-content: center; */
`

export const Footer = styled.footer`
    width: 100%;
    height: 5rem;

    :hover {
        background-color: blue;
    }
`

export const ButtonCart = styled.button`
    background-color: red;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 0px; */
`

export const Text = styled.text`
    color: ${themeDefault.colors.Primary};
`

export const HeadingText = styled.text`
    display: flex;
    font-size: 30px;
    margin-top: 2.8rem;
    margin-bottom: 2.1rem;
    justify-content: center;
    /* background-color: blue; */
    /* color: ${themeDefault.colors.Primary}; */
`

export const DivEmpresa = styled.div`
    width: 100%;
    display: flex;
    height: 28.5rem;
    position: absolute;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
`
