import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesUrl = 'api/movies';

  constructor(private http: HttpClient) {
    console.log('moviesUrl: ', this.moviesUrl);
  }

  getProducts(): Observable<any> {
         return this.http.get(this.moviesUrl)
              .pipe(
                catchError(this.handleError)
              );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `un error -->: ${err.error.message}`;
    } else {
   errorMessage = ` code retornado ${err}`;
    }
    console.error(err);
    return errorMessage;
  }

}
