import React, { Fragment, useEffect } from 'react';
import './moviedetails.scss';
import { useParams } from 'react-router-dom';
import {
  getMovieShowDetails,
  removeSelectedMovieShow,
} from '../../redux/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar, FaThumbsUp, FaFilm, FaCalendarAlt } from 'react-icons/fa';

const MovieDetails = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  const { selectedMovieShow, isLoading, error } = useSelector(
    (state) => state.movieState
  );

  useEffect(() => {
    dispatch(getMovieShowDetails(imdbId));
    return () => {
      dispatch(removeSelectedMovieShow());
    };
  }, [dispatch, imdbId]);

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Metascore,
    imdbRating,
    imdbVotes,
    DVD,
    BoxOffice,
  } = selectedMovieShow;

  const renderResponse = isLoading ? (
    <Fragment>
      <h2>Loading..</h2>
    </Fragment>
  ) : error ? (
    <Fragment>
      <h2>Something went wrong, please try again later..</h2>
    </Fragment>
  ) : (
    <div className='movie-section'>
      <div className='section-left'>
        <div className='movie-title'>
          <h1>{Title}</h1>
        </div>
        <div className='movie-rating'>
          <span>
            IMDB rating: <FaStar className='movie-icon' />
            {imdbRating}
          </span>

          <span>
            IMDB Votes: <FaThumbsUp className='movie-icon' />
            {imdbVotes}
          </span>

          <span>
            Runtime: <FaStar className='movie-icon' />
            {Runtime}
          </span>

          <span>
            Year: <FaCalendarAlt className='movie-icon' />
            {Year}
          </span>
        </div>
        <div className='movie-plot'>
          <p>{Plot}</p>
        </div>
        <div className='movie-info'>
          <div>
            <span>Director</span>
            <span>{Director}</span>
          </div>

          <div>
            <span>Stars</span>
            <span>{Actors}</span>
          </div>

          <div>
            <span>Genres</span>
            <span>{Genre}</span>
          </div>

          <div>
            <span>Languages</span>
            <span>{Language}</span>
          </div>

          <div>
            <span>Awards</span>
            <span>{Awards}</span>
          </div>
        </div>
      </div>

      <div className='section-right'>
        <img src={Poster} alt={Title} />
      </div>
    </div>
  );

  return <div>{renderResponse}</div>;
};

export default MovieDetails;
