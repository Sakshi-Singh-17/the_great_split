"use client";

import { useEffect, useState } from "react";

const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;


export default function MoviesPage()
{
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY    ;
  
  const fetchMovies = async (url) => {
    setLoading(true);

    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results || []);
    setLoading(false);
};
  
  useEffect(() => {
    fetchMovies(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
  }, []);


  const searchMovies = () => {
    const query = search.trim();

    if (query === "") {
      fetchMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      return;
    }

    fetchMovies(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  };

  return (
    <div>
      <h1>CINE STREAM</h1>
      <h3>Popular Movies</h3>
      <input type="text" placeholder="Search movies" value={search} onChange={(event) => setSearch(event.target.value)}/>
      <button onClick={searchMovies}>  Search</button>
      
    {  movies.length === 0 ? (
      <h2>No movies found</h2>
    ) : (
      movies.map((movie) => (
        <div key={movie.id}>
          <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} width="200"/>
          <h2> {movie.title}</h2>
          <p> Year:{" "} {movie.release_date? movie.release_date.slice(0, 4): "Not Available"}</p>
          <p> Rating: {movie.vote_average?.toFixed(1) || "Not Available"} </p>
        </div>
      ))
    )}
    </div>
  );
}
