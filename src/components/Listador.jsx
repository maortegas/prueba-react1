import { useState } from 'react';
import Card from  './Card'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Listador = ({movies}) => {
 const imgPath2 = 'https://image.tmdb.org/t/p/w500';

    return (
        <>
            <Row  xs={12} md={4} lg={6} className='row-card' >    
                {movies.map((movie) => ( 
                    <Card key={movie.id} id={movie.id}  imgPath= {imgPath2 + movie.poster_path}  title= {movie.title} releaseDate={movie.release_date} />
                ))}
            </Row>

        </>
    )
}

export default Listador