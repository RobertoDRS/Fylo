import './FeaturesCard.css'

export default ({image, title, text, alt}) => {
    return (
        <div>
            <img src={image} alt={alt} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}