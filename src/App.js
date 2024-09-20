import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  // Fetch movies from the API
  useEffect(() => {
    axios.get('https://dummyapi.online/api/movies')
      .then(response => {
        console.log(response);
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the movies!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Movie Database</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img 
              src={`${movie.image}`}
              alt={`${movie.movie} (Not Displayed Due To Relative Image Path in API)  `}
              className="movie-poster" 
            />
            <h3>{movie.movie}</h3>
            <p>Rating: {movie.rating}</p>
            <a target='_blank' rel="noopener noreferrer" href={movie.imdb_url}>View on IMDb</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
