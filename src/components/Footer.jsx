import './Footer.css'
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
            <div>

                <div>
                    <img src={Logo} alt="logo" />
                    <div>
                        <img src={Location} alt="localização" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, nam dolore recusandae harum eligendi molestias sequi alias illum cupiditate a temporibus. Explicabo expedita ab pariatur, veniam tenetur ad illo?</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={Phone} alt="telefone" />
                        <p>+1-543-123-4567</p>

                        <img src={Email} alt="email" />
                        <p>example@fylo.com</p>
                    </div>
                </div>

                <div>
                    <a href="#">Sobre nós</a>
                    <a href="#">Cargos</a>
                    <a href="#">Imprensa</a>
                    <a href="#">Blog</a>
                </div>

                <div>
                    <a href="#">Contato</a>
                    <a href="#">Termos</a>
                    <a href="#">Privacidade</a>
                </div>

                <div>
                    <a href="#"><img src={Facebook} alt="facebook" /></a>
                    <a href="#"><img src={Twitter} alt="twitter" /></a>
                    <a href="#"><img src={Instagram} alt="instagram" /></a>
                </div>
            </div>
        </footer>
    )
}