import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  appointments:Appointment[];
  constructor(private appointmentService:AppointmentService) { }

  ngOnInit() {
    this.appointmentService.getAppointments().subscribe(data=>{
      this.appointments=data;
    })
  }
  createAppointmentsForm(){

  }
  deleteAppointment(id:number){
    this.appointmentService.deleteAppointment(id);
  }
  
  updateAppointmentsForm(){

  }

}
