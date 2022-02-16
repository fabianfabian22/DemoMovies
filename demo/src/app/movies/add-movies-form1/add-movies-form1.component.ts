
import { Component, OnInit } from '@angular/core';
import * as actorsReducers from './../../actors/state/actors.reducer';
import * as  actorActions from './../../actors/state/actors.actions';
import { Store } from '@ngrx/store';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-add-movies-form1',
  templateUrl: './add-movies-form1.component.html',
  styleUrls: ['./add-movies-form1.component.scss']
})
export class AddMoviesForm1Component implements OnInit {
  generos : string[];
  actors$: any;
  allActors: any[] = [];

  dropdownList = [] as  any;
  selectedItems = [] as  any;
  dropdownSettings : IDropdownSettings;

  objMovie = {
    titulo: "",
    poster: "",
    genero: [],
    estudio:''
  };

  constructor(private store: Store<any>) {
    this.generos = ["Accion", "Aventura", "Animación", "ciencia ficción", "Drama", "suspenso", "terror", "comedia"];
    this.dropdownSettings =  {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false
    };

    this.dropdownList = this.generos ;
    this.selectedItems = [ ]
   }

  ngOnInit(): void {
    this.store.dispatch(actorActions.loadActors());
    this.getActors();
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
    this.selectedItems.push(item)
  }


  }


