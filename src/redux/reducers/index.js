import { combineReducers } from 'redux';
import { movieReducer } from './movieReducers';

const reducer = combineReducers({
  movieState: movieReducer,
});

export default reducer;
