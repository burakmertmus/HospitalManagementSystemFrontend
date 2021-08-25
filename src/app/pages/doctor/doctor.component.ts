import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { DoctorCreateUpdateModel } from 'src/app/models/doctorCreateUpdateModel';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl:'./doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers:[DoctorService]
})
export class DoctorComponent implements OnInit {


  constructor(private doctorService:DoctorService) { }
  doctors:Doctor[];
 
  docCreateFirstName:string;
  docCreateLastName:string;
  docCreatePhNo:string;
  docCreateAdress:string;

  docUpdateFirstName:string;
  docUpdateLastName:string;
  docUpdatePhNo:string;
  docUpdateAdress:string;


  ngOnInit() {
    this.doctorService.getDoctors().subscribe(data=>{
      this.doctors=data;
    })
  }

  //Update Modal
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(id:number): void {
    
    
    let doctorUpdateDto:DoctorCreateUpdateModel={
      doc_first_name:this.docUpdateFirstName,
      doc_last_name:this.docUpdateLastName,
      doc_ph_no:this.docUpdatePhNo,
      doc_address:this.docUpdateAdress}
    if(doctorUpdateDto==null){

    }else{
      this.isVisible = false; 
      this.updateDoctor(doctorUpdateDto,id);
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
    let doctorCreateDto:DoctorCreateUpdateModel=
    {
      doc_first_name:this.docCreateFirstName,
      doc_last_name:this.docCreateLastName,
      doc_ph_no:this.docCreatePhNo,
      doc_address:this.docCreateAdress
    }
   

    if(doctorCreateDto==null){
      console.log("Something wrong");

    }else{
      this.createIsVisible = false;
      this.createDoctor(doctorCreateDto);
      window.location.reload();
    }
  }

  createHandleCancel(): void {
    this.createIsVisible = false;
  }


  createDoctor(doctorCreateUpdateModel:DoctorCreateUpdateModel){
    this.doctorService.createDoctors(doctorCreateUpdateModel);
  }

  updateDoctor(doctorCreateUpdateModel:DoctorCreateUpdateModel,id:number){
    this.doctorService.updateDoctors(doctorCreateUpdateModel,id);
  }

  deleteDoctor(id:number){
    this.doctorService.deleteDoctors(id);
  }

}
