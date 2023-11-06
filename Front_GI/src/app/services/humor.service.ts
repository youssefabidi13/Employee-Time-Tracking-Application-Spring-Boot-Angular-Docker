import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Humor } from '../models/humor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumorService {

  constructor(private http:HttpClient,private router:Router) { }
  addHumor(humor:Humor):Observable<Humor> {
     return this.http.post<Humor>('http://localhost:8080/api/humor/add',humor);
  
  }
}
