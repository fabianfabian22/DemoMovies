import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { actorsReducer } from './state/actors.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ActorsEffects } from './state/actors.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('actors', actorsReducer),
    EffectsModule.forFeature([ActorsEffects])
  ]
})
export class ActorsModule { }
