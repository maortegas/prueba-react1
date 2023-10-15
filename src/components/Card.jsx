import './Card.css'
import TextTruncate from 'react-text-truncate'


const Card = ({ movie })=> {
    const urlImg='https://image.tmdb.org/t/p/w500/'
    return (
        <div className="mocard">
            <img alt={ movie.title} src={ urlImg+movie.poster_path} />
            <TextTruncate
                line={2}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{ movie.title }</h2>

        </div>
    )
}

export default Card