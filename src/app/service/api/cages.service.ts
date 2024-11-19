import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsigAnimal, CreateCage, PutCage } from 'src/app/interfaces/Request';
import { Cage, Message } from 'src/app/interfaces/Response';
import { appsettings } from 'src/app/settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class CagesService {
  private http = inject(HttpClient);
  private base = appsettings.cageUrl;

  constructor() { }

  get(user_id: number): Observable<Cage[]> {
    return this.http.get<Cage[]>(`${this.base}/list/${user_id}`);
  }

  getOne(id_cage: number): Observable<Cage> {
    return this.http.get<Cage>(`${this.base}/get/${id_cage}`)
  }

  post(body: CreateCage): Observable<Cage> {
    return this.http.post<Cage>(`${this.base}/create/`, body);
  }

  put(body: PutCage, id: number): Observable<Message> {
    return this.http.put<Message>(`${this.base}/update/${id}`, body);
  }
}
