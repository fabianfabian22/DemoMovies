
import { Component, OnInit } from '@angular/core';
import * as actorsReducers from './../../actors/state/actors.reducer';
import * as  actorActions from './../../actors/state/actors.actions';
import { Store } from '@ngrx/store';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-add-movies-form1',
  templateUrl: './add-movies-form1.component.html',
  styleUrls: ['./add-movies-form1.component.scss']
})
export class AddMoviesForm1Component implements OnInit {
  generos : any[] = [];
  actors$: any;
  allActors: any[] = [];

  dropdownList = [] as  any;
  selectedGeneros = [] as  any;
  dropdownSettings : IDropdownSettings={};

  objMovie = {
    titulo: "",
    poster: "",
    genero: [],
    estudio: '',
    year:1
  };
  selectedItems: { item_id: number; item_text: string; }[] | undefined;

  constructor(private store: Store<any>) {
    this.generos = [
    { id: 12,  tipo: "Accion" },
    { id: 21,  tipo: "Aventura" },
    { id: 32,  tipo: "Animación" },
    { id: 43,  tipo: "ciencia FX" },
    { id: 54,  tipo: "Drama" },
    { id: 65,  tipo: "suspenso" },
    { id: 74,  tipo: "terror" },
    { id: 83,  tipo: "comedia" }
    ];
  }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [

    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };;

  }

  getActors() {
    this.store.select(actorsReducers.getAllActors).subscribe(
      (Actors: any) => {
        this.actors$ = Actors.actors;
        let all = Array.of(this.actors$);
        this.allActors = all;
 }) }


  onSubmit(objMovie: any) { console.log(objMovie); }



  onItemSelect(item: any) {
    console.log(item);
  }

  }


