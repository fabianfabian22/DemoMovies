import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ActorsService } from '../actorsService';
import * as  actorsActions from './actors.actions';

@Injectable()
export class ActorsEffects {

  constructor(private actions$: Actions, private actorsService: ActorsService) { }

  loadActors$ = createEffect(() => {
   return this.actions$.pipe(
     ofType(actorsActions.loadActors),
     mergeMap(() => this.actorsService.getActors()
       .pipe(map(actors => actorsActions.loadSuccessActors({  actors }))

     ))
   )
})

}
