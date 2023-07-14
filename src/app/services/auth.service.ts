import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  signIn( params: { name: string; password: string } ): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>('api/auth', params)
  }

}
