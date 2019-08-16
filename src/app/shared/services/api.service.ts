import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private static setHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    });
  }

  private static formatErrors(error: any) {
    return throwError(
      error.json);
  }

  post(path: string, body: Object): Observable<any> {
    return this.http.post<Object>(environment.api_url + path, JSON.stringify(body), {headers: ApiService.setHeaders()}).pipe(
      catchError(ApiService.handleError),
      map((res: Response) => res.json())
    );

  }
  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    // return throwError('Something bad happened; please try again later.');
    return throwError(ApiService.formatErrors(error));
  };

}
