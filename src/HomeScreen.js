import React from "react";
import "./HomeScreen.css"
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";

function HomeScreen() {

    return (
           <div className="homeScreen"> 
                <Nav />
                <Banner />
                <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
                <Row title="Trendig Now" fetchUrl={requests.fetchTrending} isLargeRow={false} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={false} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={false} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow={false} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow={false} />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false} />
                <Row title="Documentaties Movies" fetchUrl={requests.fetchDocumantaries} isLargeRow={false} />
           </div> 
    );    
}

export default HomeScreen;