import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovementCageView } from 'src/app/interfaces/Response';
import { appsettings } from 'src/app/settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class ReportsApiService {
  private http = inject(HttpClient);
  private base = appsettings.ReportsUrl;

  get(asig: number): Observable<MovementCageView[]> {
    return this.http.get<MovementCageView[]>(`${this.base}/list/${asig}`)
  }
}
