import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';
import { appsettings } from 'src/app/settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class AnimalfoodMovementApiService {
  private http = inject(HttpClient);
  private base = appsettings.animalFoodMovementUrl;

  public addAnimalFoodPOST(id_asig: number, id_cage: number, amount: number): Observable<Message> {
    return this.http.post<Message>(`${this.base}/add/${id_asig}/user/${id_cage}/cage/${amount}`, null);
  }

  public removeAnimalFoodPOST(id_asig: number, id_cage: number, amount:number): Observable<Message> {
    return this.http.post<Message>(`${this.base}/remove/${id_asig}/user/${id_cage}/cage/${amount}`, null);
  }
}
