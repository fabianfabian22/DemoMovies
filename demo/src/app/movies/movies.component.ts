import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import  * as  movieActions  from './state/movies.actions';
import * as reducersMovies from './state/movies.reducer';

import * as actorsReducers from '@app/actors/state/actors.reducer';
import * as  actorActions from '@app/actors/state/actors.actions';
import { Movies } from '../share/models/movie.model';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

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
  allActors: any[] = [];

  private currentMovieSubject: BehaviorSubject<any> = new BehaviorSubject({});
  public readonly currentUser: Observable<any> = this.currentMovieSubject.asObservable();



  constructor(private store: Store<any>, private router : Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.store.dispatch(movieActions.loadMovies());
    this.store.dispatch(actorActions.loadActors());
    this.getActors();
    this.store.select(reducersMovies.getAllMovies).subscribe(allMovies => {
      this.movies$ = allMovies.movies;
      this.movies$ = allMovies.movies.map(movie => {


        this.getDataofActors(movie.actors);
        return Object.assign({}, movie, { actores: this.getDataofActors(movie.actors) });
      });

      })

  }


  getActorPerMovies(actores: number[]) {
    let list: any[];
    actores.map((actor: number) => {
      return this.allActors.map((actores2: any[]) => {
        console.log('actores2: ', actores2);

       // if (Number(actores2.get()) === actor) {
        //  return  list.push(actores)
        // }
      }
      )
    }

    )

  }

  getActors() {
    this.store.select(actorsReducers.getAllActors).subscribe(
      (Actors: any) => {
        this.actors$ = Actors.actors;
        this.allActors = Actors.actors.map((person: any) => {
          return Object.assign({}, person, { fullName: `${person['first_name']}  ${person['last_name']}` });
        });
        this.allActors = Array.of(this.allActors);
      })
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

  goToSeeDetail(id: number) {
    this.store.dispatch(movieActions.selectMovie({ currentMovieId: id }));
    this.store.select(reducersMovies.getAllMovies).subscribe(allMovies => {
      this.movies$ = allMovies.movies.filter(movie => movie.id === id);
      this.getActors();
      let movie = Object.assign({}, this.movies$, this.allActors);
      console.log('movie: ', movie[0]);

    })
   // this.router.navigateByUrl('/movies/detailmovies' );
  }

}

