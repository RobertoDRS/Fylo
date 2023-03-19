import './Menu.css'
import Logo from '../assets/logo.svg'

export default () => {
    return (
        <header>
            <div id="menu">
                <img src={Logo} alt="Logo" />
                <div>
                    <a href="#">Características</a>
                    <a href="#">Time</a>
                    <a href="#">Inscreva-se</a>
                </div>
            </div>
        </header>
    )
}