import './CardTeam.css'

export default ({image, name}) => {
    return (
        <div className='card-team'>
            <p>A Fylo melhorou a produtividade da nossa equipe por uma ordem de grandeza. Desde que fez
                a mudança a nossa equipe tornou-se uma máquina de colaboração.</p>
            <div className='card-team-main-div'>
                <img src={image} alt="pessoa" />
                <div className='card-team-sec-div'>
                    <span>{name}</span>
                    <p>Founder & CEO, Hunddle</p>
                </div>
            </div>
        </div>
    )
}