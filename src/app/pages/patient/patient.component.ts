import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers:[PatientService]
})
export class PatientComponent implements OnInit {
  
  constructor(private patientService:PatientService) { }
  patients:Patient[];

  patientAddForm:FormGroup;
  patientUpdateForm!:FormGroup;
  
  ngOnInit() {
    this.patientService.getPatients().subscribe(data=>{
      this.patients=data;
    })
  }


  createPatientForm(){
    
  }

  updatePatientForm(){

  }

  deletePatient(id:number){
    this.patientService.deletePatients(id);
  }

}
