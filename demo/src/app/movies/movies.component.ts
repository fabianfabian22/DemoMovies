import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actors } from 'src/models/actors.model';


import  * as  movieActions  from './state/movies.actions';
import * as reducersMovies from './state/movies.reducer';

import * as actorsReducers from '../actors/state/actors.reducer';
import * as  actorActions from '../actors/state/actors.actions';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies$: any;
  actors$: any;
  movieActors: any[]=[];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(movieActions.loadMovies());
    this.store.dispatch(actorActions.loadActors());
    setTimeout(() => {
      this.store.select(reducersMovies.getAllMovies).subscribe(allMovies => {
        this.movies$ = allMovies.movies;
        this.getActors();
      })
   }, 5000)
  }

  getActors() {
    this.store.select(actorsReducers.getAllActors).subscribe(
      Actors => {
        this.actors$ = Actors.actors; })
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

