import styled from "styled-components";
import { themeDefault } from "../../global/themes/default";

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    min-height: 240vh; 
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

    @media (max-width: 767px) {
        display: grid;
        justify-content: center;
        grid-template-columns: auto;
        justify-content: center;
    }
    @media (min-width: 653px) {
        display: grid;
        justify-content: center;
        grid-template-columns: auto;
        justify-content: center;
    }
    @media (min-width: 393px) {
        display: grid;
        justify-content: center;
        grid-template-columns: auto;
        justify-content: center;
    }
    @media (min-width: 900px) {
        display: grid;
        justify-content: center;
        grid-template-columns: auto;
        justify-content: center;
    }
    @media (min-width: 1353px) {
        display: grid;
        justify-content: center;
        grid-template-columns: auto;
        justify-content: center;
    }
    @media (min-width: 1280px) {
        display: grid;
        justify-content: center;
        grid-template-columns: auto auto;
        justify-content: center;
    }
    @media (min-width: 700px) {
        display: grid;
        justify-content: center;
        grid-template-columns: auto auto;
        justify-content: center;
    }
`

export const Menu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Footer = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    :hover {
        background-color: ${themeDefault.colors.Quinary};
    }
`

export const ButtonCart = styled.button`
    background-color: red;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Text = styled.text`
    color: ${themeDefault.colors.Primary};
    margin-right: 5px;
`

export const HeadingText = styled.text`
    display: flex;
    font-size: 30px;
    margin-top: 2.8rem;
    margin-bottom: 2.1rem;
    justify-content: center;
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
