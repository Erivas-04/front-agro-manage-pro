import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../../settings/appsettings';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/Response/user';
import { PutUser } from 'src/app/interfaces/Request/user';
import { Message } from 'src/app/interfaces/Response/acces';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private base = appsettings.userUrl;

  constructor() { }

  get(id: string): Observable<User> {
    return this.http.get<User>(`${this.base}/${id}/select`);
  }

  put(body: PutUser, id: number): Observable<Message>  {
    return this.http.put<Message>(`${this.base}/${id}/update`, body);
  }
}