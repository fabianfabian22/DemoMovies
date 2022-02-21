import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { MoviesService } from '../movies.service';

import * as  MoviesActios from './movies.actions';

@Injectable()
export class MoviesEffects {

  constructor(private actions$: Actions, private moviesService: MoviesService) { }

  loadProducts$ = createEffect(() => {
   return this.actions$.pipe(
     ofType(MoviesActios.loadMovies),
     mergeMap(() => this.moviesService.getMovies()
       .pipe(map(movies => MoviesActios.loadSuccessMovies({ movies })),
       catchError(error => of(MoviesActios.loadFailMovies({error})))

     ))
   )
  })

  saveProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActios.createMovie),
      mergeMap(action=> this.moviesService.addMovies(action.movies)
        .pipe(
          map(movies => MoviesActios.saveSuccessMovies({ movies }))
      ))
    )
 })

}

