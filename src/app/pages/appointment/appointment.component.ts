import { Component, OnInit } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentCreateModel } from 'src/app/models/appointmentCreateModel';
import { AppointmentUpdateModel } from 'src/app/models/appointmentUpdateModel';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl:'./appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {
  appointments:Appointment[];
  //updateModalModel:Appointment;
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
  showModal(id:number): void {

     let updateModalModel:AppointmentUpdateModel={
      doc_id:this.appointments.find(x=>x.appointment_id == id).doc_id,
      pat_id:this.appointments.find(x=>x.appointment_id == id).pat_id};
      this.updatePat_id=updateModalModel.pat_id;
      this.updateDoc_id=updateModalModel.doc_id;

    this.isVisible = true;
  }


  handleOk(id:number): void {
      if(!this.updateDoc_id || !this.updatePat_id)
    {

    }else{
    this.isVisible = false;
    let appointmentUpdateModel:AppointmentUpdateModel={doc_id:this.updateDoc_id,pat_id:this.updatePat_id};
    this.updateAppointmentsForm(appointmentUpdateModel,id);
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
    }
  }
  createHandleCancel(): void {
    this.createIsVisible = false;
  }

  //Datetime
  onChange(result: Date): void {
  }

  getAppointmentById(id:number){
    this.appointmentService.getAppointmentById(id);
  }

  createAppointmentsForm(appointmentCreateModel:AppointmentCreateModel){
    this.appointmentService.createAppointment(appointmentCreateModel);
    window.location.reload();
  }

  updateAppointmentsForm(appointmentUpdateModel:AppointmentUpdateModel,id:number){
    this.appointmentService.updateAppointment(appointmentUpdateModel,id);
    window.location.reload();
  }
  deleteAppointment(id:number){
    this.appointmentService.deleteAppointment(id);
    window.location.reload();
  }

}
