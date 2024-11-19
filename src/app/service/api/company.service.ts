import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../../settings/appsettings';
import { CompanyResponse } from '../../interfaces/Response';
import { CompanyRequest } from '../../interfaces/Request';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private http = inject(HttpClient);
  private baseUrl = appsettings.companyUrl;

  constructor() {}
  
  get(id: string): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${this.baseUrl}/${id}`)
  }

  post(body: CompanyRequest): Observable<CompanyResponse>{
    return this.http.post<CompanyResponse>(`${this.baseUrl}/create`, body)
  }

}
