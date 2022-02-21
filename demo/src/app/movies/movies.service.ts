import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Movies } from '@app/share/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesUrl = 'api/movies';
  private movies: Movies[] = [];

  constructor(private http: HttpClient) {}

  getMovies(): Observable < any > {
    return this.http.get(this.moviesUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  addMovies(movies: Movies): Observable < any > {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const newMovies = {
      ...movies,
      id: null
    };
    return this.http.post < Movies > (this.moviesUrl, newMovies, {
        headers
      })
      .pipe(
        tap((data: any) => console.log('createProduct: ' + JSON.stringify(data))),
        tap((data: Movies) => {
          this.movies.push(data);
        }),
        catchError(this.handleError)
      );
  }


  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `un error -->: ${err.error.message}`;
    } else {
      errorMessage = ` code error ${err}`;
    }
    console.error(err);
    return errorMessage;
  }

}
