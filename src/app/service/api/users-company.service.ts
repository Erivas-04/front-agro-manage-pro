import { Message } from './../../interfaces/Response/acces';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../../settings/appsettings';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/Response/user';
import { CreateUser } from 'src/app/interfaces/Request/user';

@Injectable({
  providedIn: 'root'
})
export class UsersCompanyService {
  private http = inject(HttpClient);
  private base = appsettings.asignedUrl;

  constructor() { }

  get(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.base}/users/${id}/company`);
  }

  post(body: CreateUser): Observable<Message> {
    return this.http.post<Message>(`${this.base}/create`, body);
  }
}
