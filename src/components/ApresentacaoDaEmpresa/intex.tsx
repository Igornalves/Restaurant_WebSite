import { 
    Conteiner,
    Image,
    ConteinerText,
    Heading,
    Text
} from "./styles";

import ImageDaEmpresa from '../../assets/Hamburguer.jpg'

export function ApresentacaoDaEmpresa() {
    return(
        <Conteiner>
            <Image
                src={ImageDaEmpresa}
                alt="Foto para perfil"
            />
            <ConteinerText>
                <Heading>
                    Red Burguer
                </Heading>
                <Text>
                    Rua dev sucesso, 12, Campo Grande, MS
                </Text>
            </ConteinerText>
        </Conteiner>
    )
}