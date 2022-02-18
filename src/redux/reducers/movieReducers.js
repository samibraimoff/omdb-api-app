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
const initialState = {
  movies: [],
  selectedMovieShow: {},
  shows: [],
  isLoading: false,
  error: null,
};

export const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_REQUEST:
    case GET_SHOWS_REQUEST:
    case GET_MOVIESHOWDETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: payload,
        error: null,
      };

    case GET_SHOWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shows: payload,
        error: null,
      };

    case GET_MOVIESHOWDETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedMovieShow: payload,
        error: null,
      };

    case GET_MOVIES_FAILURE:
    case GET_SHOWS_FAILURE:
    case GET_MOVIESHOWDETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
