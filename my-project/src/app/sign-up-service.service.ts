import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  url="http://localhost:8081/add";
  constructor(private _http: HttpClient) { }
 register(userData:any)
 {
 return this._http.post<any>(this.url,userData);
 }
}
