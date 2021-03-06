import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /*Inject the HttpClient service which was provided HttpClientModule in SharedModule*/
  constructor(private http: HttpClient) {
  }

  /*Set Headers for http calls*/
  private static setHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      // 'Authorization': 'my-auth-token'
    });
  }

  /*Format errors into readable json*/
  private static formatErrors(error: any) {
    return throwError(
      error.error);
  }

  /*Post according to Register/login function*/
  post(path: string, body: any = {}): Observable<any> {
    debugger
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body), {headers: ApiService.setHeaders()}).pipe(
      catchError(ApiService.handleError),
      map((res: HttpResponse<object>) => {debugger; return res;})
    );

  }

  /*Handle error from http calls*/
  private static handleError(error: HttpErrorResponse){
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
    debugger
    return throwError(ApiService.formatErrors(error));
    // return throwError(ApiService.formatErrors(error));

  };

}
