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
  REMOVE_MOVIESHOWDETAIL_FAILURE,
  REMOVE_MOVIESHOWDETAIL_REQUEST,
  REMOVE_MOVIESHOWDETAIL_SUCCESS,
} from '../types';

import movieApi from '../../common/apis/movieApi';

const api = '1e82f079';

export const getMovies = (searched) => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_REQUEST,
  });
  try {
    const response = await movieApi.get(
      `?apiKey=${api}&s=${searched}&type=movie`
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
    const response = await movieApi.get(`?apiKey=${api}&i=${id}&plot=full`);

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

export const getShows = (searched) => async (dispatch) => {
  dispatch({
    type: GET_SHOWS_REQUEST,
  });
  try {
    const response = await movieApi.get(
      `?apiKey=${api}&s=${searched}&type=series`
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

export const removeSelectedMovieShow = () => async (dispatch) => {
  dispatch({
    type: REMOVE_MOVIESHOWDETAIL_REQUEST,
  });
  try {
    dispatch({
      type: REMOVE_MOVIESHOWDETAIL_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REMOVE_MOVIESHOWDETAIL_FAILURE,
      payload: error,
    });
  }
};
