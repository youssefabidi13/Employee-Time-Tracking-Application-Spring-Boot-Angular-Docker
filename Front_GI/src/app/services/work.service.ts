import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api.url.config';
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http: HttpClient) {

  }

  getWorks(): Observable<any> {
      return this.http.get(API_URL.WORKS_URL);
  }

  addWork(work: Work): Observable<any> {
      return this.http.post(API_URL.WORKS_URL, work);
  }

  getWorkStatus(): Observable<any> {
    return this.http.get(API_URL.WORKS_URL+'/status');
  }

  getWorkExist(): Observable<any> {
    return this.http.get(API_URL.WORKS_URL+'/exist');
  }

  createWork(workData: any): Observable<number> {
      return this.http.post<number>(API_URL.WORKS_URL + '/create', workData);
    }
  
    endWork(): Observable<any> {
      return this.http.put(API_URL.WORKS_URL + '/end',null);
    }
}
