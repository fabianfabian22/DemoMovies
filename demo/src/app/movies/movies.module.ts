import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { StoreModule } from '@ngrx/store';
import { MoviesReducer } from './state/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './state/movies.effects';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', MoviesReducer),
    EffectsModule.forFeature([MoviesEffects]),
  ]
})
export class MoviesModule { }
