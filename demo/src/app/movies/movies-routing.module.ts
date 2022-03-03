import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'addmovies', loadChildren: () => import('./add-movies-form1/add-movies-form1.module').then(m => m.AddMoviesForm1Module) },
  { path: 'detailmovies', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
