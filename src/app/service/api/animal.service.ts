import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalDTO } from 'src/app/interfaces/Request';
import { Animal, Message } from 'src/app/interfaces/Response';
import { appsettings } from 'src/app/settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public http = inject(HttpClient);
  public base = appsettings.animalUrl;

  constructor() { }

  get(user_id: number): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.base}/list/${user_id}`);
  }

  post(user_id: number, body: AnimalDTO): Observable<Message> {
    return this.http.post<Message>(`${this.base}/create/${user_id}`,body);
  }

  put(id_animal: number, body: AnimalDTO): Observable<Message> {
    return this.http.put<Message>(`${this.base}/update/${id_animal}`, body);
  }
}
