import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import  * as  movieActions  from './movies.actions';
import * as appState  from './../../state/app.state';
import { Movies } from 'src/models/movie.model';

export interface MovieState {
  movies: Movies[];

}
export interface State extends appState.State {
  movies: MovieState;
}

export  const initalState :MovieState= {
  movies: []
}

export const MoviesReducer = createReducer<MovieState>(
  initalState,
  on(movieActions.loadSuccessMovies, (state , action) : MovieState  => {

    return {
      ...state,
      movies: action.movies
    };
  })
);

export const getProductFeatureState = createFeatureSelector<MovieState>('movies');

export const getAllMovies = createSelector(
  getProductFeatureState,
  state => state
)
