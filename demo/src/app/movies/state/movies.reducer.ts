import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';
import * as movieActions from './movies.actions';
import * as appState from '@app/state/app.state';
import {
  Movies
} from '@app/share/models/movie.model';



export interface MovieState {
  movies: Movies[];
  currentProductId: number | null;
}
export interface State extends appState.State {
  movies: MovieState;
}

export const initalState: MovieState = {
  movies: [],
  currentProductId: null,
}

export const MoviesReducer = createReducer < MovieState > (
  initalState,
  on(movieActions.loadSuccessMovies, (state, action): MovieState => {
    return {
      ...state,
      movies: action.movies
    };
  }),
  on(movieActions.saveSuccessMovies, (state, action): MovieState => {
    return {
      ...state,
      movies: [...state.movies, action.movies]
    };
  }),
  on(movieActions.SelectMovie, (state, action): MovieState => {
    return {
      ...state,
      currentProductId : action.currentProductId
    };

  })

);

export const getMoviesFeatureState = createFeatureSelector < MovieState > ('movies');

export const getAllMovies = createSelector(
  getMoviesFeatureState,
  state => state
);
export const getCurrentProductId = createSelector(
  getMoviesFeatureState,
  state => state.currentProductId
);

export const getCurrentMovies = createSelector(
  getMoviesFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
  title:  '',
  poster: '',
  genre: [],
  year: null,
  duration: null,
  imdbRating: null,
  actors: [],
      };
    } else {
      return currentProductId ? state.movies.find(p => p.id === currentProductId) : null;
    }
  }
);

