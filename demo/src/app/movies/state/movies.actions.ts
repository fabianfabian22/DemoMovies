
import { Movies } from "@app/share/models/movie.model";
import { createAction, props } from "@ngrx/store";


export const loadMovies = createAction('[Movies]  load  Movies ');
export const loadSuccessMovies = createAction('[Movies] Load  success Movies ', props<{ movies: Movies[] }> ());
export const loadFailMovies = createAction('[Movies]  Load fail   Movies ', props<{ error: string }>());

export const createMovie =
  createAction(
  '[Movies] Add Movie',
  props<{ movies: Movies }>()
);

export const SelectMovie =
  createAction(
  '[Movies] select detail  Movie',
  props<{currentProductId : number }>()
);

export const saveSuccessMovies =
  createAction('[Movies] Save  success Movies ',
  props<{ movies: Movies }>());


export const saveFailMovies =
  createAction('[Movies]  Save fail   Movies ',
  props<{ error: string }>());
