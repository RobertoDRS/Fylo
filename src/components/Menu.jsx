import './Menu.css'

import Logo from '../assets/logo.svg'

export default () => {
    return (
        <header>

            <div id="menu" className='max-width'>

                <img src={Logo} alt="Logo" />
                <div>
                    <a href="#features">Características</a>
                    <a href="#team">Time</a>
                    <a href="#signIn">Inscreva-se</a>
                </div>

            </div>

        </header>
    )
}