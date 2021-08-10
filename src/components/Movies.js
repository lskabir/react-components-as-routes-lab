import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
        <div>
          <h2>Title: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          Genres:
          {movie.genres.map(genre => {
            return <ul><li>{genre}</li></ul>
          })}
        </div>
        )
      })}
    </div>
  );
};

export default Movies;
