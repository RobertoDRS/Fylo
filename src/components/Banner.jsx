import './Banner.css'
import Button from '../itens/Button'

export default () => {
    return (
        <section id="banner">
            <div className="image">

            </div>
            <div className="texts">
                <h2>
                    Todos os seus arquivos num único local seguro, acessível em qualquer lugar.
                </h2>
                <p>A Fylo armazena todos os seus ficheiros mais importantes num único local seguro.</p>
                <p>Acesse eles onde precisar, compartilhe e colabore com a sua família, amigos e colegas de trabalho.</p>
                <Button title="Começar"/>
            </div>
            
        </section>
    )
}