import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

constructor(private httpClient:HttpClient) { }
  path = "https://localhost:44364/"


  getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.path + "appointments");
  }

  createAppointment(appointment:Appointment){
    this.httpClient.post(this.path+'appointments',appointment).subscribe(data=>{
      let l=<Appointment>JSON.parse(JSON.stringify(data));
    });
  }

  updateAppointment(appointment:Appointment,id:number){
    this.httpClient.put(this.path+'appointments/'+id,appointment).subscribe(data=>{
      let l=<Appointment>JSON.parse(JSON.stringify(data));
    });
  }

  deleteAppointment(id:number){
    this.httpClient.delete(this.path+'appointments/'+id).subscribe();
  }
}
