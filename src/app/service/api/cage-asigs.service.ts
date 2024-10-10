import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsigAnimal } from 'src/app/interfaces/Request';
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
    return this.http.patch<Message>(`${this.base}/${id_cage}/animal/set`, body);
  }

  asigConcentrate(id_cage: number, id_concentrate: number, amount: number): Observable<Message> {
    return this.http.patch<Message>(`${this.base}/${id_cage}/cage/${id_concentrate}/concentrate/asig/${amount}`, null);
  }
}
