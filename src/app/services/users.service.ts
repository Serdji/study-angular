import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor( private http: HttpClient ) { }


  public getUsers(): Observable<IUser[]>  {
    return this.http.get<IUser[]>( 'api/users' )
  }

  public getUsersTotal(): Observable<{ total: number }> {
    return this.http.get<{ total: number }>('api/userstotal')
  }
  
  public getUser( id: number ): Observable<IUser>  {
    return this.http.get<IUser>(`api/users/${id}`)
  }

  public addUser( user: IUser ): Observable<IUser> {
    return this.http.post<IUser>('api/users', user)
  }

  public updateUser( id: number, user: any ): Observable<IUser>{
    return this.http.put<IUser>(`api/users/${id}`, user)
  }

  public deleteUser( id: number ): Observable<IUser[]> {
    return this.http.delete<IUser[]>(`api/users/${id}`)
  }

}
