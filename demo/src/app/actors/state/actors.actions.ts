
import { createAction, props } from "@ngrx/store";
import { Actors } from 'src/models/actors.model';

export const loadActors = createAction('[Actors]  load  Actors ');
export const loadSuccessActors = createAction('[Actors] Load  success Actors ', props<{ actors: Actors[] }> ());
export const loadFailActors = createAction('[Actors]  Load fail  Actors ', props<{ error: string }> ());

