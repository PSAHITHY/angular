import { ErrorHandler, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Login } from './login';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  _url='http://localhost:8081/signIn';
  constructor(private _http:HttpClient) { }
  signIn(login:Login)
  {
    return this._http.post<any>(this._url, login)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: ErrorHandler)
  {
    return throwError(error);

  }
  url='http://localhost:8081/all';
  getAllUsers()
  {
    return this._http.get<any>(this.url);
  }
}
