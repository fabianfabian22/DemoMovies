
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as actorsReducers from '@app/actors/state/actors.reducer';
import * as actorActions from '@app/actors/state/actors.actions';
import * as  movieActions from '../state/movies.actions';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Movies } from '@app/share/models/movie.model';
import { State } from '../state/movies.reducer';

@Component({
  selector: 'app-add-movies-form1',
  templateUrl: './add-movies-form1.component.html',
  styleUrls: ['./add-movies-form1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddMoviesForm1Component implements OnInit {
  gender: any[] = [];
  actors$: any;
  allActors: any[] = [];
  multiple = true;
  selectedGeneros = [] as any;

  selectedItems: { item_id: number; item_text: string; }[] | undefined;

  constructor(private store: Store<State>) {
    this.gender = ['Accion', 'Aventura', 'Animación', 'ciencia FX', 'Drama', 'suspenso', 'terror', 'comedia'];

  }

  form= new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    poster: new FormControl('', [Validators.required]),
    genre: new FormControl('', Validators.required),
    actors: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    imdbRating: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }


    ngOnInit(): void {
      this.selectedItems = [];
      this.store.dispatch(movieActions.loadMovies());
      this.store.dispatch(actorActions.loadActors());
      this.getActors();
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


  onSubmit() {

    if (this.form.valid) {
       if (this.form.dirty) {
        this.store.dispatch(movieActions.createMovie({ movies: this.form.value }))
      }
    }
  }


}
