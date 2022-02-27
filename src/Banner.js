import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import banner from "./assets/banner.png";

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1 )]);
            return request;
        }
            
        fetchData ();

    }, []);

    function truncate(string, n) {
        return string?.length > n ? string?.substr(0, n -1 ) + "...": string     
    }

    console.log(movie);

    return (
        <header className="banner" style={{ 
            backgroundPosition: 'center center',
            backgroundSize: 'cover', 
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
            }}>

            <div className="banner-content">
                <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner-button">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">My List</button>
                </div>
                <h1 className="banner-description">
                    {truncate(movie?.overview, 150)}                    
                </h1>
                <div className="banner-fadeBottom"></div>
            </div>

        </header>
    );
}

export default Banner;