import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './movielist.scss';

const MovieList = () => {
  const { movies, shows, isLoading, error } = useSelector(
    (state) => state.movieState
  );

  const renderMovieList = isLoading ? (
    <Fragment>
      <div>
        <h3>Loading...</h3>
      </div>
    </Fragment>
  ) : error ? (
    <Fragment>
      <div className='movie-error'>
        <h3>Something went wrong, please try again later.</h3>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      {movies?.map((data) => (
        <MovieCard key={data.imdbID} data={data} />
      ))}
    </Fragment>
  );

  const renderShowList = isLoading ? (
    <Fragment>
      <div>
        <h3>Loading...</h3>
      </div>
    </Fragment>
  ) : error ? (
    <Fragment>
      <div className='movie-error'>
        <h3>Something went wrong, please try again later.</h3>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      {shows?.map((data) => (
        <MovieCard key={data.imdbID} data={data} />
      ))}
    </Fragment>
  );

  return (
    <Fragment>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2>Movies</h2>
          <div className='movie-container'>{renderMovieList}</div>
        </div>

        <div className='movie-list'>
          <h2>Shows</h2>
          <div className='movie-container'>{renderShowList}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieList;
