import './CardTeam.css'

export default ({image, name}) => {
    return (
        <div>
            <p>A Fylo melhorou a produtividade da nossa equipe por uma ordem de grandeza. Desde que fez
                a mudança a nossa equipe tornou-se uma máquina de colaboração.</p>
            <div>
                <img src={image} alt="pessoa" />
                <div>
                    <span>{name}</span>
                    <p>Founder & CEO, Hunddle</p>
                </div>
            </div>
        </div>
    )
}