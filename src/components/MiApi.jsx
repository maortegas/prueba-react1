import { useState, useEffect } from 'react';
import Card from  './Card'
import Row from 'react-bootstrap/Row';

const MiApi = ({movies, setMovies}) => {
    const urlApi='https://api.themoviedb.org/3/discover/movie?api_key=8f1dbb33bd97a1a85a8ebd05e77b82b3';
    const imgPath2 = 'https://image.tmdb.org/t/p/w500';
   
    useEffect(() => {
        callApi();
    
    }, []);

    const callApi = async () => {
        try { 
            const response = await fetch(urlApi);
            const data = await response.json();

            setMovies(data.results)
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    };

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

export default MiApi