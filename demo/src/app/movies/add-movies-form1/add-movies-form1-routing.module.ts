import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesForm1Component } from './add-movies-form1.component';

const routes: Routes = [{ path: '', component: AddMoviesForm1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMoviesForm1RoutingModule { }
