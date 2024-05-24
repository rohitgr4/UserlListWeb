import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*constructor() { }
  getUsers(): Observable<User[]> {
   const users: User[] = [
      { name: 'Albert Miguel', email: 'albert.miguel@example.com' },
      { name: 'Jona', email: 'jane.smith@example.com' },
      { name: 'Michael Johnson', email: 'michael.johnson@example.com' },
      { name: 'Emily Ross', email: 'emily.ross@example.com' }
    ];
    return of(users);
  }*/
  private apiUrl = 'https://localhost:7197/api/users'; // API endpoint URL

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }  
}
