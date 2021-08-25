import { Component, OnInit } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentCreateModel } from 'src/app/models/appointmentCreateModel';
import { AppointmentUpdateModel } from 'src/app/models/appointmentUpdateModel';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl:'./appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})

export class AppointmentComponent implements OnInit {
  appointments:Appointment[];
  constructor(private appointmentService:AppointmentService,private i18n: NzI18nService) { }
  createdoc_id:number;
  createpat_id:number;

  updatePat_id:number;
  updateDoc_id:number;
  date = null;
  ngOnInit() {
    this.appointmentService.getAppointments().subscribe(data=>{
      this.appointments=data;
    })
  }

  //Update Modal
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(id:number): void {
      if(!this.updateDoc_id || !this.updatePat_id)
    {

    }else{
    this.isVisible = false;
    let appointmentUpdateModel:AppointmentUpdateModel={doc_id:this.updateDoc_id,pat_id:this.updatePat_id};
    this.updateAppointmentsForm(appointmentUpdateModel,id);
    window.location.reload();
    }
    
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  
  //CreateModal
  createIsVisible = false;
  showCreateModal(): void {
    this.createIsVisible = true;
  }
  createHandleOk(): void {
    if(!this.createdoc_id || !this.createpat_id || !this.date)
    {
      
    }else{
      this.createIsVisible = false;
      let appointmentCreateModel:AppointmentCreateModel={doc_id:this.createdoc_id,pat_id:this.createpat_id,appointment_date:this.date};
      this.createAppointmentsForm(appointmentCreateModel);
      window.location.reload();
    }
  }
  createHandleCancel(): void {
    this.createIsVisible = false;
  }

  //Datetime
  onChange(result: Date): void {
  }


  createAppointmentsForm(appointmentCreateModel:AppointmentCreateModel){
    this.appointmentService.createAppointment(appointmentCreateModel);
  }

  updateAppointmentsForm(appointmentUpdateModel:AppointmentUpdateModel,id:number){
    this.appointmentService.updateAppointment(appointmentUpdateModel,id);
  }
  deleteAppointment(id:number){
    this.appointmentService.deleteAppointment(id);
  }

}
