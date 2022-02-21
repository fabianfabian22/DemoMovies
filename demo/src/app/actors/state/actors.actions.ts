
import { Actors } from "@app/share/models/actors.model";
import { createAction, props } from "@ngrx/store";



export const loadActors = createAction('[Actors]  load  Actors ');
export const loadSuccessActors = createAction('[Actors] Load  success Actors ', props<{ actors: Actors[] }> ());
export const loadFailActors = createAction('[Actors]  Load fail  Actors ', props<{ error: string }> ());

