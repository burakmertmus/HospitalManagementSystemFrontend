import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor';
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

  doctorAddForm!:FormGroup;
  doctorUpdateForm!:FormGroup;

  ngOnInit() {
    this.doctorService.getDoctors().subscribe(data=>{
      this.doctors=data;
    })
  }

  createDoctorForm(){
  
  }

  updateDoctorForm(){
    
  }

  deleteDoctor(id:number){
    this.doctorService.deleteDoctors(id);
  }

}
