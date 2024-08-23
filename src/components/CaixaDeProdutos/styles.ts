import styled from "styled-components";

export const Conteiner = styled.div`
    width: 612px;
    height: 144px;
    display: flex;
    flex-direction: row;
    margin-bottom: 2.25rem;
    margin-left: 35px;
    
    @media (min-width: 300px) {
        display: flex;
        width: 250px;
        height: 200px;
        margin-left: 5px;
        align-items: center;
        justify-content: center;
    }
    @media (min-width: 360px) {
        display: flex;
        width: 350px;
        height: 145px;
        margin-left: 2px;
        align-items: center;
        justify-content: center;
    }
    @media (min-width: 589px) {
        display: flex;
        width: 650px;
        height: 144px;
        margin-left: 0px;
        align-items: center;
        justify-content: center;
    }
    @media (min-width: 763px) {
        display: flex;
        width: 350px;
        height: 145px;
        margin-left: 15px;
        margin-right: 15px;
        align-items: center;
        justify-content: center;
    }
    @media (min-width: 800px) {
        display: flex;
        width: 370px;
        height: 145px;
        margin-left: 20px;
        margin-right: 20px;
        align-items: center;
        justify-content: center; 
    }
    @media (min-width: 890px) {
        display: flex;
        width: 600px;
        height: 145px;
        align-items: center;
        justify-content: center; 
    }
`

export const DivImagem = styled.div`
    transition: transform 5ms ease;
    :hover {
        transform: scale(1.10);
    }
`

export const Button = styled.button`
    width: 50px;
    height: 30px;
`

export const TextTitulo = styled.header`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 18px;
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;
`

export const ImageProduto = styled.img`
    width: 9rem;
    height: 9rem;
    border-radius: 0.6rem;
`

export const TextDescricao = styled.text`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 16px;
`

export const DivProduto = styled.div`
    margin-left: 0.8rem;
`

export const DivDoValor = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.938rem;
`

export const TextValor = styled.div`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 18px;

    @media (min-width: 300px) {
        margin-right: 5px;
    }

    @media (min-width: 300px) {
        white-space: nowrap;// Impede que o texto quebre em várias linhas
        overflow: hidden; // Oculta o texto que ultrapassa os limites do contêiner
        text-overflow: ellipsis, // Adiciona "..." ao final do texto truncado
    }
`
 