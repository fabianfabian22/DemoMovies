import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


import  * as  movieActions  from './state/movies.actions';
import * as reducersMovies from './state/movies.reducer';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies$: any;
  selectedProduct: any ;


  constructor( private store : Store<any>) { }

  ngOnInit(): void {

    this.store.dispatch(movieActions.loadMovies());

    setTimeout(() => {
          this.store.select(reducersMovies.getAllMovies ).subscribe(productCurrent=>{
             this.movies$ = productCurrent.movies
          })
            }, 5000)
   }


}
