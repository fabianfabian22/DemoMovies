import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

const routes: Routes = [{ path: '', component: MoviesComponent }, { path: 'addmovies', loadChildren: () => import('./add-movies-form1/add-movies-form1.module').then(m => m.AddMoviesForm1Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
