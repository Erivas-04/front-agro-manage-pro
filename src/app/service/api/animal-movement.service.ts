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
  private base = appsettings.animalMovementUrl;

  public unsubscribeAnimalPOST(body: UnsubscribeAnimalDTO, id_asig: number, id_cage: number, type_of_movement: number): Observable<Message> {
    return this.http.post<Message>(`${this.base}/register/remove/${id_asig}/user/${id_cage}/cage/${type_of_movement}`,body)
  }

  public subscribeAnimalPOST(id_asig: number, id_cage: number, amount: number): Observable<Message> {
    return this.http.post<Message>(`${this.base}/set/animals/${id_asig}/user/${id_cage}/cage/${amount}/amount`, null)
  }
}
