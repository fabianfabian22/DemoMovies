import { MoviesReducer } from './../state/movies.reducer';
import { MoviesEffects } from './../state/movies.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMoviesForm1RoutingModule } from './add-movies-form1-routing.module';
import { AddMoviesForm1Component } from './add-movies-form1.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShareModule } from '@app/share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddMoviesForm1Component,
  ],
  imports: [
    CommonModule,
    AddMoviesForm1RoutingModule,
    StoreModule.forFeature('movies', MoviesReducer),
    EffectsModule.forFeature([MoviesEffects]),
    ShareModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AddMoviesForm1Module { }
