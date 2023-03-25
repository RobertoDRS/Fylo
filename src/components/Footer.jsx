import './Footer.css'

import Button from '../itens/Button'

import Logo from '../assets/logo.svg'
import Location from '../assets/icon-location.svg'
import Phone from '../assets/icon-phone.svg'
import Email from '../assets/icon-email.svg'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'


export default () => {
    return (
        <footer>

            <div id= "signIn"className='signIn-main'>
                
                <div className='signIn'>
                    <h3>Obtenha acesso antecipado hoje</h3>
                    <p>
                        Leva apenas um minuto para se inscrever e nosso nível de partida livre é extremamente generoso.
                        Se você tiver alguma dúvida, nossa equipe de suporte ficará feliz em ajudá-lo.
                    </p>
                    <form action="">
                        <input type="email" placeholder='email@exemplo.com' />
                        <Button title="Comece de graça"/>
                    </form>
                </div>
            </div>

            <div className='footer-main-div'>

                <div className='footer-sec-div-1'>
                    <img className='footer-logo' src={Logo} alt="logo" />
                    <div>
                        <img src={Location} alt="localização" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, nam dolore recusandae harum eligendi molestias sequi alias illum cupiditate a temporibus. Explicabo expedita ab pariatur, veniam tenetur ad illo?</p>
                    </div>
                </div>

                <div className='footer-sec-div-2'>
                    <div className='footer-sec-div-main'>
                        <div className='footer-sec-div-2-sec'>
                            <img src={Phone} alt="telefone" />
                            <p>+1-543-123-4567</p>
                        </div>

                        <div className='footer-sec-div-2-sec'>
                            <img src={Email} alt="email" />
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                </div>

                <div className='footer-sec-div-3'>
                    <a href="#">Sobre nós</a>
                    <a href="#">Cargos</a>
                    <a href="#">Imprensa</a>
                    <a href="#">Blog</a>
                </div>

                <div className='footer-sec-div-4'>
                    <a href="#">Contato</a>
                    <a href="#">Termos</a>
                    <a href="#">Privacidade</a>
                </div>

                <div className='footer-sec-div-5'>
                    <a href="#"><img src={Facebook} alt="facebook" /></a>
                    <a href="#"><img src={Twitter} alt="twitter" /></a>
                    <a href="#"><img src={Instagram} alt="instagram" /></a>
                </div>

            </div>

        </footer>
    )
}