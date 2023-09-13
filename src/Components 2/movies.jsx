import React, { useEffect, useState } from "react";



import './movies.css'

import {FaTv, FaHome, FaVideo, FaCalendar, FaChevronDown} from "react-icons/fa"
import {RiLogoutBoxLine} from "react-icons/ri"
import { useParams } from "react-router-dom";


function Movies(){

const param = useParams()
console.log(param)

const [search, setSearch] = useState({});
useEffect(() => {
const fetchAPI = async () => {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${param.id}?&api_key=04c35731a5ee918f014970082a0088b1`)
    const movie = await request.json();
    setSearch(movie)
   
}
fetchAPI();
}, [])

const imgURL = "https://image.tmdb.org/t/p/w500";
const imgAPI = "https://image.tmdb.org/t/p/w1280";


        return(
    <div className="main">
        <div className="wrap">
            <div className="side-bar">
                <div className="logo"><FaTv style={{
                            width: '24px',
                            height: '24px',
                            padding: '5px',
                            color: 'white',
                            backgroundColor: 'red',
                            borderRadius: '50%'
                        }} />&nbsp; &nbsp;
                <h3>MovieBox</h3>
                </div>
                <div className="side">
                    <div className="item">
                        <FaHome style={{
                            width: '24px',
                            height: '24px',
                            padding: '5px',
                            color: 'black',
                            backgroundColor: 'white',
                            borderRadius: '50%'
                        }} />&nbsp; &nbsp;
                        <h3>Home</h3>
                    </div>
                    <div className="item">
                        <FaVideo style={{
                            width: '24px',
                            height: '24px',
                            padding: '5px',
                            color: 'black',
                            backgroundColor: 'white',
                            borderRadius: '50%'
                        }} />&nbsp; &nbsp;
                        <h3>Movies</h3>
                    </div>
                    <div className="item">
                        <FaTv style={{
                            width: '24px',
                            height: '24px',
                            padding: '5px',
                            color: 'black',
                            backgroundColor: 'white',
                            borderRadius: '50%'
                        }} />&nbsp; &nbsp;
                        <h3>Tv Series</h3>
                    </div>
                    <div className="item">
                        <FaCalendar style={{
                            width: '24px',
                            height: '24px',
                            padding: '5px',
                            color: 'black',
                            backgroundColor: 'white',
                            borderRadius: '50%'
                        }} />&nbsp; &nbsp;
                        <h3>Tv Series</h3>
                    </div>
                    <div className="text">
                        <h4>Play movie quizzes and earn prizes.</h4>
                        <h5>50k people are playing right now.</h5>
                        <button>Start Playing</button>
                    </div>
                    <div className="item">
                        <RiLogoutBoxLine style={{
                            width: '24px',
                            height: '24px',
                            padding: '5px',
                            color: 'black',
                            backgroundColor: 'white',
                            borderRadius: '50%'
                        }} />&nbsp; &nbsp;
                        <h3>Log Out</h3>
                    </div>
                </div>
            </div>

            <div className="content">
                <center>
                    <img className="image" src={imgAPI + search.poster_path} />
                </center>
                <div className="info">
                    <div className="title">
                        <h4 data-testid= "movie-title">{search.title}</h4>|
                        <h4 data-testid = "movie-release-date">Release Date: {
                            new Date(search.release_date).toUTCString()
                            }</h4>|
                        <h4>{search.genre}</h4>|
                        <h4 data-testid="movie-runtime">Runtime:{search.runtime} mins</h4>
                    </div>
                    <div className="synopsis" data-testid="movie-overview">
                        {search.overview}
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    );
    }

  export default Movies;
