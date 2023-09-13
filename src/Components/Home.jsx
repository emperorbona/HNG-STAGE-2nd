import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

import Card from './Card'
import Headerr from './header';

const featuredAPI= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&Page=1";

const searchAPI="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Home(){
    const [movies, setMovies] =useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const ids = useParams();
    console.log(ids)

    useEffect(() => {
        fetch(featuredAPI)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results);
        })
    }, []);

    const handleOnSubmit = (e) => {
        
        e.preventDefault();
        
        fetch(searchAPI + searchTerm)
        
        .then((res) => res.json())
        .then((data) => {
           
            console.log(data);
            setMovies(data.results);
        });
        
    };
    
    const handleOnChange = (e) => {
        
        setSearchTerm(e.target.value)
    }

  return(
    <>
    <header>
        <h2>MOVIEBOX</h2>
        <div>
            <form onSubmit={handleOnSubmit}>
        <input 
        className='search'
        type="search" 
        placeholder="Search" 
        value={searchTerm}
        onChange={handleOnChange}
        />
        </form>
        </div>
        
       
    </header>
    <div className='movie-page'>
        
        {movies.length > 0 && movies.map((movie) => (
             
                <Card key={movie.id} {...movie} />
             
        ))}
    </div>
    </>
  )
}

export default Home
