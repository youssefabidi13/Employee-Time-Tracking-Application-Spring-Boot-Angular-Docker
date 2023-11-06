import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getEmployeeCount(): Observable<number> {
    return this.httpClient.get<number>('http://localhost:8080/api/admin/count-employees');
  } 
  getEmployee(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/admin/list-employees');
  }
  countAllHumorsNegative(): Observable<number> {  
    return this.httpClient.get<number>('http://localhost:8080/api/admin/count-humors-negative');
  }
  countAllHumorsPositive(): Observable<number> {  
    return this.httpClient.get<number>('http://localhost:8080/api/admin/count-humors-positive');
  }
  listHumors(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/admin/list-humors');
  }
}
