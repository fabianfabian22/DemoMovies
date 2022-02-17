import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  private actorsUrl = 'api/actors';

  constructor(private http: HttpClient) {}

  getActors(): Observable<any> {
         return this.http.get(this.actorsUrl)
              .pipe(
                //tap(data => console.log(JSON.stringify(data))),
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
