import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MoviesReducer } from '../state/movies.reducer';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', MoviesReducer),
    DetailRoutingModule
  ]
})
export class DetailModule { }
