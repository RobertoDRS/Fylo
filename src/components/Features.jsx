import './Features.css'

import FeaturesCard from '../itens/FeaturesCard'

import Acess from '../assets/icon-access-anywhere.svg'
import Security from '../assets/icon-security.svg'
import Collaboration from '../assets/icon-collaboration.svg'
import AnyFile from '../assets/icon-any-file.svg'

export default () => {
    return (
        <section id="features">

            <FeaturesCard title="Acesse aos seus arquivos, em qualquer lugar"
        text="A capacidade de utilizar um smartphone, tablet ou computador para acessar à sua conta
        significa que os seus arquivos o seguem para todo o lado." alt="acesso"
        image={Acess}/>

            <FeaturesCard title="Segurança em que pode confiar"
            text="Autenticação em 2 fatores e encriptação controlada pelo utilizador são apenas duas
            das características de segurança que permitimos para ajudar a proteger os seus arquivos."
            image={Security} alt="segurança"/>

            <FeaturesCard title="Colaboração em tempo real"
            text="Partilhar em segurança arquivos e pastas com amigos, familiares e colegas para viver
            colaboração. Não são necessários anexos de correio eletrônico."
            image={Collaboration} alt="colaboração"/>

            <FeaturesCard title="Armazenar qualquer tipo de ficheiro"
            text="Quer esteja tirando fotografias de férias ou documentos de trabalho, Fyle tem-no
            coberto permitindo que todos os tipos de arquivos sejam armazenados e compartilhados em segurança." image={AnyFile} alt="Qualquer arquivo"/>

        </section>
    )
}