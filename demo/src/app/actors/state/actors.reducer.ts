import { Actors } from '@app/share/models/actors.model';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as appState  from './../../state/app.state';

import * as  actionsActor  from './actors.actions';

export interface ActorsState {
  actors:  Actors[];
}
export interface State extends appState.State {
  actors: ActorsState;
}

export  const initialState :ActorsState= {
  actors: []
}

export const actorsReducer = createReducer<ActorsState>(
  initialState,
  on(actionsActor.loadSuccessActors, (state , action) : ActorsState  => {

    return {
      ...state,
      actors: action.actors
    };
  })
);

export const getActorFeatureState = createFeatureSelector<ActorsState>('actors');

export const getAllActors = createSelector(
  getActorFeatureState ,
  state => state
)
