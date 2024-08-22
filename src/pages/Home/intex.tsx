import { 
    BackgroundImg, 
    ButtonCart, 
    Conteiner,
    DivEmpresa,
    DivParaProdutos,
    Footer,
    HeadingText,
    Menu,
    Text,
} from "./styles";

import imgBackGround from '../../assets/bg.png'
import { HorarioFuncionamento } from "../../components/HorarioFuncionamento/intex";
import { ApresentacaoDaEmpresa } from "../../components/ApresentacaoDaEmpresa/intex";
import { CaixaDeProduto } from "../../components/CaixaDeProdutos/intex";
import { FaShoppingCart } from "react-icons/fa";
import { themeDefault } from "../../global/themes/default";

import produto1 from '../../assets/hamb-1.png'
import produto2 from '../../assets/hamb-2.png'
import produto3 from '../../assets/hamb-3.png'
import produto4 from '../../assets/hamb-4.png'
import produto5 from '../../assets/hamb-5.png'
import produto6 from '../../assets/hamb-6.png'
import produto7 from '../../assets/hamb-7.png'
import produto8 from '../../assets/hamb-8.png'
import refri1 from '../../assets/refri-1.png'
import refri2 from '../../assets/refri-2.png'

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
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Smash Burger"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto2} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto3} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto4} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto5} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto6} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto7} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto8} 
                    alt={""}                    
                    />
                </DivParaProdutos>
                <HeadingText>
                    Bebidas
                </HeadingText>
                <DivParaProdutos>
                    <CaixaDeProduto
                        titulo="Coca cola Lata"
                        valor="R$ 6,00"
                        img={refri1}
                    />
                    <CaixaDeProduto
                        titulo="Guarana Lata"
                        valor="R$ 8,00"
                        img={refri2}
                    />
                </DivParaProdutos>
            </Menu>
            <Footer>
                <ButtonCart>
                    <Text>
                        ( 1 ) Veja seu carrinho    
                    </Text>
                    <FaShoppingCart 
                        size={23}
                        color={themeDefault.colors.Primary}
                    />
                </ButtonCart>
            </Footer>
        </Conteiner>
    );
}