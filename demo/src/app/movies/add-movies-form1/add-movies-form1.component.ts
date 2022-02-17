
import { Component, OnInit } from '@angular/core';
import * as actorsReducers from '@app/actors/state/actors.reducer';
import * as actorActions from '@app/actors/state/actors.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-add-movies-form1',
  templateUrl: './add-movies-form1.component.html',
  styleUrls: ['./add-movies-form1.component.scss']
})
export class AddMoviesForm1Component implements OnInit {
  gender: any[] = [];
  actors$: any;
  allActors: any[] = [];
  multiple = true;
  selectedGeneros = [] as any;


  objMovie = {
    titulo: "",
    poster: "",
    gender: [],
    estudio: '',
    actors: [],
    year: 1824,
    rating:0.0
  };
  selectedItems: { item_id: number; item_text: string; }[] | undefined;

  constructor(private store: Store<any>) {
    this.gender = ["Accion", "Aventura", "Animación", "ciencia FX", "Drama", "suspenso", "terror", "comedia"];
  }

  ngOnInit(): void {
    this.selectedItems = [];
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

  onSubmit(objMovie: any) { console.log(objMovie); }

}
