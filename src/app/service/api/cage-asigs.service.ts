import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsigAnimal, AsigAnimalFood } from 'src/app/interfaces/Request';
import { Message } from 'src/app/interfaces/Response';
import { appsettings } from 'src/app/settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class CageAsigsService {
  private http = inject(HttpClient);
  private base = appsettings.cageUrl;

  constructor() { }

  asigAnimal(id_cage: number, body: AsigAnimal): Observable<Message>{
    return this.http.put<Message>(`${this.base}/asig/${id_cage}/animal`, body);
  }

  // Modificar funcionamiento
  asigConcentrate(id_cage: number, body: AsigAnimalFood): Observable<Message> {
    return this.http.put<Message>(`${this.base}/asig/${id_cage}/animal/food`, body);
  }
}
