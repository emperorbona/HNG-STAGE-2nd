import React from "react";
import { Link } from "react-router-dom";
const imgAPI = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title, poster_path, overview, vote_average, release_date, id}) => (

    <Link to={`/movies/${id}`}>
    <div className="movie" data-testid = "movie-card">
        <img src={imgAPI + poster_path} alt={title} data-testid = "movie-poster" />
        <div className="movie-info">
            <div className="first-part">
            <h3 data-testid="movie-title">{title}</h3>
            
            <p data-testid ="movie-release-date">{release_date}</p>
            </div>
            <br />
            <div className="second-part">
            <img className="imdb" src="./src/IMDB_Logo_2016.svg.png" alt="" />
            <span>{vote_average} /10</span>
            </div>
           
        </div>
    </div></Link>
    
);

export default Movie;