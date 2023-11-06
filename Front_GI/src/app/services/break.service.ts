import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Break } from '../models/break';
import { API_URL } from '../config/api.url.config';

@Injectable({
  providedIn: 'root'
})
export class BreakService {

  constructor(private http: HttpClient) {

  }

  getBreaks(): Observable<any> {
      return this.http.get(API_URL.BREAKS_URL);
  }   

  addBreak(breakInstance: Break): Observable<any> {
      return this.http.post(API_URL.BREAKS_URL, breakInstance);
  }
}
