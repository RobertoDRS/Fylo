import './SignIn.css'

import Button from '../itens/Button'

export default () => {
    return (
        <div>
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
    )
}