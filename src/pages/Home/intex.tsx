import { 
    BackgroundImg, 
    Conteiner,
    DivEmpresa,
    DivParaProdutos,
    HeadingText,
    Menu,
    Rodape,
    Text
} from "./styles";

import imgBackGround from '../../assets/bg.png'
import { HorarioFuncionamento } from "../../components/HorarioFuncionamento/intex";
import { ApresentacaoDaEmpresa } from "../../components/ApresentacaoDaEmpresa/intex";
import { CaixaDeProduto } from "../../components/CaixaDeProdutos/intex";
import { FaShoppingCart } from "react-icons/fa";
import { themeDefault } from "../../global/themes/default";

export default function Home() {
    return(
        <Conteiner>
            <BackgroundImg src={imgBackGround} alt="imagem para BackGround" />
            <DivEmpresa>
                <ApresentacaoDaEmpresa/>
                <HorarioFuncionamento/> 
            </DivEmpresa>
            <Menu>
                <HeadingText>
                    Conheça nosso menu
                </HeadingText>
                <DivParaProdutos>
                    <CaixaDeProduto/>
                </DivParaProdutos>
            </Menu>
            <Rodape>
                <Text>
                    ( 1 ) Veja seu carrinho
                </Text>
                <FaShoppingCart 
                    size={23}
                    color={themeDefault.colors.Primary}
                />
            </Rodape>
        </Conteiner>
    );
}