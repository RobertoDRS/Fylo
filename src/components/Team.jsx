import './Team.css'

import CardTeam from '../itens/CardTeam'

import Arrow from '../assets/icon-arrow.svg'
import Profile1 from '../assets/profile-1.jpg'
import Profile2 from '../assets/profile-2.jpg'
import Profile3 from '../assets/profile-3.jpg'


export default () => {
    return (
        <section id="team">

            <div className='team-part-1'>

                <div className='team-image'></div>

                <div className='team-text'>
                    <h2>Mantenha-se produtivo, onde quer que esteja</h2>
                    <p>
                        Nunca deixe que a localização seja um problema ao acessar aos seus arquivos. A Fylo tem-no
                        coberto para todas as suas necessidades de armazenamento de arquivos.
                    </p>

                    <p>Partilhe ficheiros e pastas em segurança com amigos, familiares e colegas para viver
                        colaboração. Não são necessários anexos de correio eletrônico.
                    </p>

                    <a href="#">Veja como a Fylo funciona <img className='icon-arrow' src={Arrow} alt="seta" /></a>
                </div>
                
            </div>
            
            <div className='team-part-2'>
                <CardTeam  name="Satish Patel" image={Profile1}/>
                <CardTeam name="Bruce Mckenzie" image={Profile2}/>
                <CardTeam name="Iva Boyd" image={Profile3}/>
            </div>

        </section>
    )
}