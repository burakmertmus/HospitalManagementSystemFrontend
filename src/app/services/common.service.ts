import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Common } from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  path = "https://localhost:44364/"
constructor(private httpClient:HttpClient) { }

  getCounts(): Observable<Common> {
    return this.httpClient.get<Common>(this.path + "commons");
  }

  
}
