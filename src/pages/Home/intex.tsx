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
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
                    />
                    <CaixaDeProduto 
                    titulo={"Cheese Burger Duplo"} 
                    descricao={"Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa"} 
                    valor={"R$ 35,00"} 
                    img={produto1} 
                    alt={""}                    
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