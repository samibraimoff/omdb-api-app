import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../MovieListing/MovieList';
import { getMovies, getShows } from '../../redux/actions/movieActions';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getShows());
  }, [dispatch]);
  return (
    <Fragment>
      <div className='banner-img'>
        <MovieList />
      </div>
    </Fragment>
  );
};

export default Home;
