import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';
import { RemoveAnimalFood } from 'src/app/interfaces/Request';
import { appsettings } from 'src/app/settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class AnimalfoodMovementApiService {
  private http = inject(HttpClient);
  private base = appsettings.ReportsUrl;

  public registerAnimalfood(id_asig: number, body: RemoveAnimalFood): Observable<Message> {
    return this.http.post<Message>(`${this.base}/animalfood/${id_asig}`, body)
  }
}
