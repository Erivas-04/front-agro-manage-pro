import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { an } from '@fullcalendar/core/internal-common';
import { Login } from 'src/app/interfaces/Request';
import { appsettings } from '../../settings/appsettings';
import { Access } from '../../interfaces/Response';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);
  private baseUrl = appsettings.loginUrl;

  constructor() {}

  singIn(object: Login): Observable<Access> {
    return this.http.post<Access>(this.baseUrl, object)
  }

}
