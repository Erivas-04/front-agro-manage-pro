import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsettings } from '../../settings/appsettings';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/Response';
import { PutPassword, PutUser } from 'src/app/interfaces/Request';
import { Message } from 'src/app/interfaces/Response';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private base = appsettings.userUrl;

  constructor() { }

  get(id: string): Observable<User> {
    return this.http.get<User>(`${this.base}/${id}/get`);
  }

  put(body: PutUser, id: number): Observable<Message>  {
    return this.http.put<Message>(`${this.base}/${id}/update`, body);
  }

  putPassword(body: PutPassword, id: number): Observable<Message> {
    return this.http.put<Message>(`${this.base}/${id}/update/pass`, body);
  }
}
