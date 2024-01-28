import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SingleUserResponse, User } from '../interfaces/users-request.interface';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'https://reqres.in/api/users'
  private http = inject( HttpClient );


  getUserByid( id: number ): Observable<User> {

    return this.http.get<SingleUserResponse>(`${ this.baseUrl }/${ id }`)
      .pipe(
        map( response => response.data ),
      );

  }
}
