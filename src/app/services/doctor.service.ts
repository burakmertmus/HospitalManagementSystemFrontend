import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

constructor(private httpClient: HttpClient) { }
  path = "https://localhost:44364/"

  getDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.path + "doctors");
  }

  createDoctors(doctor:Doctor){
    this.httpClient.post(this.path+'doctors',doctor).subscribe(data=>{
      let l=<Doctor>JSON.parse(JSON.stringify(data));
    });
  }

  updateDoctors(doctor:Doctor,id:number){
    this.httpClient.put(this.path+'doctors/'+id,doctor).subscribe(data=>{
      let l=<Doctor>JSON.parse(JSON.stringify(data));
    });
  }

  deleteDoctors(id:number){
    this.httpClient.delete(this.path+'doctors/'+id)
  }
}
