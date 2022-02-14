import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { MoviesService } from '../movies.service';

import * as  MoviesActios from './movies.actions';

@Injectable()
export class MoviesEffects {

  constructor(private actions$: Actions, private moviesService: MoviesService) {}
  loadProducts$ = createEffect(() => {
   return this.actions$.pipe(
     ofType(MoviesActios.loadMovies),
     mergeMap(() => this.moviesService.getProducts()
       .pipe(map(movies =>  MoviesActios.loadSuccessMovies({  movies }))

     ))
   )
})

}
