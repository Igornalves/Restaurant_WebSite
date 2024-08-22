// import { FaCartPlus } from "react-icons/fa";
import { 
    Conteiner,
    ImageProduto,
    TextDescricao,
    DivDoValor,
    TextValor,
    TextTitulo
} from "./styles";

export function CaixaDeProduto() {
    return(
        <Conteiner>
            <ImageProduto/>
            <TextTitulo>
                Cheese Burger Duplo
            </TextTitulo>
            <TextDescricao>
                Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa
            </TextDescricao>
            <DivDoValor>
                <TextValor>

                </TextValor>
                {/* <FaCartPlus /> */}
            </DivDoValor>
        </Conteiner>
    )
}