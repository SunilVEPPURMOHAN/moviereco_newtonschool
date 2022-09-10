import React from "react";
import { Container , Card } from "react-bootstrap";
import Axios from "axios";
import data from './data/data.js';
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Movie = (props)=>{

    const[movie,setMovie] = useState('');
    
    useEffect(()=>{
    Axios.get(`${data.url}${props.movie}&apikey=${data.apikey}`).then(res=> setMovie(res.data)).catch(err=>console.log(err));
    },[props.movie]);
    return(
    <div className="App" title={movie.Title}>  
    <Container className='p-4 col-sm-12 col-lg-6' title={movie.Title}>  
    <Card className="flex-fill" title={movie.Title}>
  <Card.Img variant="top" src={movie.Poster} title={movie.Title}/>  
  <Card.Body title={movie.Title}>  
    <Card.Title title={movie.Title}>{movie.Title}({movie.Year})</Card.Title>  
    <Card.Subtitle className="mb-2 text-muted" title={movie.Title}>{movie.Language} | {movie.Director}</Card.Subtitle>
  <Card.Text title={movie.Title}>  
   IMDB {movie.imdbRating} | Metascore {movie.Metascore}
    </Card.Text>
    </Card.Body> 
    </Card>
</Container>  
    </div>  );
}

export default Movie;