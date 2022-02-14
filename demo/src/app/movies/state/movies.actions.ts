import {  Movies } from '../../../models/movie.model';
import { createAction, props } from "@ngrx/store";


export const loadMovies = createAction('[Movies]  load  Movies ');
export const loadSuccessMovies = createAction('[Movies] Load  success Movies ', props<{ movies: Movies[] }> ());
export const loadFailMovies = createAction('[Movies]  Load fail   Movies ', props<{ error: string }> ());
