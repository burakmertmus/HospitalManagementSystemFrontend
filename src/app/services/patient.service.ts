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

  createPatients(patient:PatientCreateUpdateModel){
    this.httpClient.post(this.path+'patient',patient).subscribe(data=>{
      let l=<Patient>JSON.parse(JSON.stringify(data));
    });
  }

  updatePatients(patient:PatientCreateUpdateModel,id:number){
    this.httpClient.put(this.path+'patient/'+id,patient).subscribe(data=>{
      let l=<Patient>JSON.parse(JSON.stringify(data));
    });
  }


  deletePatients(id:number){
    this.httpClient.delete(this.path+'patient/'+id).subscribe()
  }
  
}
