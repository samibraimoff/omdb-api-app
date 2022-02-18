import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_SHOWS_FAILURE,
  GET_SHOWS_REQUEST,
  GET_SHOWS_SUCCESS,
  GET_MOVIESHOWDETAIL_FAILURE,
  GET_MOVIESHOWDETAIL_REQUEST,
  GET_MOVIESHOWDETAIL_SUCCESS,
} from '../types';

import movieApi from '../../common/apis/movieApi';
import { API_KEY } from '../../common/apis/movieApiKey';

const movieText = 'harry';
const showText = 'friends';

export const getMovies = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_REQUEST,
  });
  try {
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${movieText}&type=movie`
    );

    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: response.data.Search,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_MOVIES_FAILURE,
      payload: error,
    });
  }
};

export const getMovieShowDetails = (id) => async (dispatch) => {
  dispatch({
    type: GET_MOVIESHOWDETAIL_REQUEST,
  });
  try {
    const response = await movieApi.get(`?apiKey=${API_KEY}&i=${id}&plot=full`);

    dispatch({
      type: GET_MOVIESHOWDETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_MOVIESHOWDETAIL_FAILURE,
      payload: error,
    });
  }
};

export const getShows = () => async (dispatch) => {
  dispatch({
    type: GET_SHOWS_REQUEST,
  });
  try {
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${showText}&type=series`
    );

    dispatch({
      type: GET_SHOWS_SUCCESS,
      payload: response.data.Search,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_SHOWS_FAILURE,
      payload: error,
    });
  }
};
