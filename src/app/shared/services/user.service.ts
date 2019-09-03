import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().subscribe(); // .distinctUntilChanged();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  /*Inject Api and Http services*/
  constructor(private apiService: ApiService,
              private http: HttpClient) {
  }


  setAuth(user: User) {
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  attemptAuth(type, credentials): Observable<User> {
    let route: string;
    route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials}).pipe(
      catchError(err => err ),
      map(
        (data: any) => {
          this.setAuth(data.user);
          return data;
        }
      )
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

}
