import { Movies } from '@app/share/models/movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as actorsReducers from '@app/actors/state/actors.reducer';
import * as  movieActions from '@app/movies/state/movies.actions';
import * as  reducersMovies from '@app/movies/state/movies.reducer';
import { getCurrentMovieId, getCurrentMovies, State } from '../state/movies.reducer';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit  {
  currentRoute: any;
  movieSeleted: any;
  movie: any;
  id: string | number | undefined;
  movieall$: any;
  select: any;
  constructor(private store: Store<State>) { }



  ngOnInit(): void {

    this.movieSeleted = this.store.pipe(select(getCurrentMovieId));
    this.select = this.movieSeleted.subscribe(
      (movieid: any) => {
        this.id = movieid;
      });
    this.select.unsubscribe();
    this.store.dispatch(movieActions.loadMovies());
    this.movieall$ = this.store.select(reducersMovies.getAllMovies).subscribe(allMovies => {
      this.movie = allMovies.movies.find(movie => movie.id ===  this.id );
    })


    }
  }
