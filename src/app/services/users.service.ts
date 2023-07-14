import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { IUser } from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public usersTotalSubject$: ReplaySubject<void> = new ReplaySubject()

  constructor( private http: HttpClient ) { }


  public getUsers(): Observable<IUser[]>  {
    this.usersTotalSubject$.next()
    return this.http.get<IUser[]>( 'api/users' )
  }

  public getUsersTotal(): Observable<{ total: number }> {
    return this.http.get<{ total: number }>('api/userstotal')
  }
  
  public getUser( id: number ): Observable<IUser>  {
    this.usersTotalSubject$.next()
    return this.http.get<IUser>(`api/users/${id}`)
  }

  public addUser( user: IUser ): Observable<IUser> {
    this.usersTotalSubject$.next()
    return this.http.post<IUser>('api/users', user)
  }

  public updateUser( id: number, user: any ): Observable<IUser>{
    this.usersTotalSubject$.next()
    return this.http.put<IUser>(`api/users/${id}`, user)
  }

  public deleteUser( id: number ): Observable<IUser[]> {
    this.usersTotalSubject$.next()
    return this.http.delete<IUser[]>(`api/users/${id}`)
  }

}
