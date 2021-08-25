import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import {  AppointmentCreateModel } from '../models/appointmentCreateModel';
import {  AppointmentUpdateModel } from '../models/appointmentUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

constructor(private httpClient:HttpClient) { }
  path = "https://localhost:44364/"


  getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.path + "appointments");
  }

  createAppointment(appointmentCreateModel:AppointmentCreateModel){
    this.httpClient.post(this.path+'appointments',appointmentCreateModel).subscribe(data=>{
      let l=<Appointment>JSON.parse(JSON.stringify(data));
    });
  }

  updateAppointment(appointmentUpdateModel:AppointmentUpdateModel,id:number){
    this.httpClient.put(this.path+'appointments/'+id,appointmentUpdateModel).subscribe(data=>{
      let l=<Appointment>JSON.parse(JSON.stringify(data));
    });
  }

  deleteAppointment(id:number){
    this.httpClient.delete(this.path+'appointments/'+id).subscribe();
  }
}
