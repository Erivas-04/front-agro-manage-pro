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

  get(id: number): Observable<Cage[]> {
    return this.http.get<Cage[]>(`${this.base}/${id}/asig`);
  }

  post(body: CreateCage): Observable<Message> {
    return this.http.post<Message>(`${this.base}/create`, body);
  }

  put(body: PutCage, id: number): Observable<Message> {
    return this.http.put<Message>(`${this.base}/${id}/update`, body);
  }

  asigAnimal(id_cage: number, body: AsigAnimal): Observable<Message> {
    return this.http.patch<Message>(`${this.base}/${id_cage}/animal/set`, body);
  }

  asigConcentrate(id_cage: number, id_concentrate): Observable<Message> {
    return this.http.patch<Message>(`${this.base}/${id_cage}/cage/${id_concentrate}/concentrate/asig`, null);
  }
}
