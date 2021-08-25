import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { HttpClient } from '@angular/common/http';
import { PatientCreateUpdateModel } from '../models/patientCreateUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
 
 
constructor(private httpClient: HttpClient) { }
  path = "https://localhost:44364/"
  
  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.path + "patients");
  }


  getPatientById(id:number): Observable<Patient>{
    return this.httpClient.get<Patient>(this.path+'patients/'+id);
  }

  createPatients(patient:PatientCreateUpdateModel){
    this.httpClient.post(this.path+'patients',patient).subscribe(data=>{
      let l=<Patient>JSON.parse(JSON.stringify(data));
    });
  }

  updatePatients(patient:PatientCreateUpdateModel,id:number){
    this.httpClient.put(this.path+'patients/'+id,patient).subscribe(data=>{
      let l=<Patient>JSON.parse(JSON.stringify(data));
    });
  }


  deletePatients(id:number){
    this.httpClient.delete(this.path+'patients/'+id).subscribe()
  }
  
}
