import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalDTO } from 'src/app/interfaces/Request';
import { Animal, Message } from 'src/app/interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public http = inject(HttpClient);
  public base = "http://localhost:8080/animal"

  constructor() { }

  get(id: number): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.base}/${id}/asig`);
  }

  post(id_user: number, body: AnimalDTO): Observable<Message> {
    return this.http.post<Message>(`${this.base}/create/${id_user}`,body);
  }

  put(id_animal: number, body: AnimalDTO): Observable<Message> {
    return this.http.put<Message>(`${this.base}/${id_animal}/update`, body);
  }
}
