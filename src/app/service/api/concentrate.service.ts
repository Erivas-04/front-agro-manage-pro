import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConcentrateDTO } from 'src/app/interfaces/Request';
import { Concentrate, Message } from 'src/app/interfaces/Response';
import { appsettings } from 'src/app/settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class ConcentrateService {
  private http = inject(HttpClient);
  private base = appsettings.animalUrl;

  get(user_id: number): Observable<Concentrate[]> {
    return this.http.get<Concentrate[]>(`${this.base}/food/list/${user_id}`);
  }

  post(user_id: number, body: ConcentrateDTO): Observable<Message> {
    return this.http.post<Message>(`${this.base}/food/create/${user_id}`, body);
  }

  put(animal_food_id: number, body: ConcentrateDTO): Observable<Message> {
    return this.http.put<Message>(`${this.base}/food/update/${animal_food_id}`, body);
  }
}
