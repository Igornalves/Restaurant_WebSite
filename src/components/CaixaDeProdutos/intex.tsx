import { FaCartPlus } from "react-icons/fa";

import { 
    Conteiner,
    ImageProduto,
    TextDescricao,
    DivDoValor,
    TextValor,
    TextTitulo,
    DivProduto,
    DivImagem,
    Button
} from "./styles";

interface typeBox {
    titulo: string,
    descricao?: string,
    valor: string,
    img: string,
    alt?: string 
}

export function CaixaDeProduto({ titulo, descricao, valor, img, alt }: typeBox) {
    return(
        <Conteiner>
            <DivImagem>
                <ImageProduto
                    src={img}
                    alt={alt}
                />
            </DivImagem>
            <DivProduto>
                <TextTitulo>
                    {titulo}
                </TextTitulo>
                <TextDescricao>
                    {descricao}
                </TextDescricao>
                <DivDoValor>
                    <TextValor>
                        {valor}
                    </TextValor>
                    <Button>
                        <FaCartPlus 
                            color="white"
                            style={{
                                backgroundColor: 'black',
                                padding: 3,
                                width: 45,
                                height: 25,
                                marginRight: 36,
                                borderRadius: 5,
                            }}
                        />
                    </Button>
                </DivDoValor>
            </DivProduto>
        </Conteiner>
    )
}