import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import  * as  movieActions  from './state/movies.actions';
import * as reducersMovies from './state/movies.reducer';

import * as actorsReducers from '@app/actors/state/actors.reducer';
import * as  actorActions from '@app/actors/state/actors.actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies$: any;
  actors$: any;
  movieActors: any[] = [];
  loading = true;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.loading = true;
    this.store.dispatch(movieActions.loadMovies());
    this.store.dispatch(actorActions.loadActors());
    setTimeout(() => {
      this.store.select(reducersMovies.getAllMovies).subscribe(allMovies => {
        this.movies$ = allMovies.movies.filter(movie => movie.poster !== null);
        this.getActors();
      })
   }, 1000)
  }

  getActors() {
    this.store.select(actorsReducers.getAllActors).subscribe(
      Actors => {
        this.actors$ = Actors.actors;
      })
      this.loading = false;

  }

getDataofActors(listOfActors: any[]) {
    let salida:any[]=[];

    listOfActors.map((persona: number) => {
      for (let q = 0; q < this.movies$.length; q++) {
        const element = this.movies$[q]
         if(element.id === persona){
            for (let i = 0; i < this.actors$.length; i++) {
             const element2 = this.actors$[i];
              if(element.id === element2.id){
                    salida.push(this.actors$[i])
                 }
            }
         }
    }
    })

  return salida;
  }
}

