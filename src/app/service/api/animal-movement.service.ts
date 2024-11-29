import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnsubscribeAnimalDTO } from 'src/app/interfaces/Request';
import { Message } from 'src/app/interfaces/Response';
import { appsettings } from 'src/app/settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class AnimalMovementService {
  private http = inject(HttpClient);
  private base = appsettings.ReportsUrl;

  public reportAnimal(id_asig: number, body: UnsubscribeAnimalDTO): Observable<Message>{
    return this.http.post<Message>(`${this.base}/animal/${id_asig}`, body);
  }
}
