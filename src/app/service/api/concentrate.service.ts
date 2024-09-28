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
  private base = appsettings.concentrateUrl;

  get(id: number): Observable<Concentrate[]> {
    return this.http.get<Concentrate[]>(`${this.base}/all/company/${id}`);
  }

  post(id: number, body: ConcentrateDTO): Observable<Message> {
    return this.http.post<Message>(`${this.base}/create/${id}`, body);
  }

  put(id: number, body: ConcentrateDTO): Observable<Message> {
    return this.http.put<Message>(`${this.base}/update/${id}`, body);
  }
}
