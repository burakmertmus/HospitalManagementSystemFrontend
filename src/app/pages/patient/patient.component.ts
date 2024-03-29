import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
import { PatientCreateUpdateModel } from 'src/app/models/patientCreateUpdateModel';
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

  patCreateFirstName: string;
  patCreateLastName: string;
  patCreateInsNo:string;
  patCreatePhNo: string;
  patCreateAdress: string;

  patUpdateFirstName: string;
  patUpdateLastName: string;
  patUpdateInsNo:string;
  patUpdatePhNo: string;
  patUpdateAdress: string;

  
  ngOnInit() {
 
    this.patientService.getPatients().subscribe(data=>{
      this.patients=data;
    })
  }
    //Update Modal
    isVisible = false;
    showModal(id:number) : void {

      

      this.patUpdateFirstName=this.patients.find(x=>x.patient_id == id).pat_first_name;
      this.patUpdateLastName=this.patients.find(x=>x.patient_id == id).pat_last_name;
      this.patUpdateInsNo=this.patients.find(x=>x.patient_id == id).pat_insurance_no;
      this.patUpdatePhNo=this.patients.find(x=>x.patient_id == id).pat_ph_no;
      this.patUpdateAdress=this.patients.find(x=>x.patient_id == id).pat_address;
      this.isVisible = true;
      
    }

      handleOk(id:number) : void  {

      let patientUpdateDto:PatientCreateUpdateModel={
        pat_first_name:this.patUpdateFirstName,
        pat_last_name:this.patUpdateLastName,
        pat_insurance_no:this.patUpdateInsNo,
        pat_ph_no:this.patUpdatePhNo,
        pat_address:this.patUpdateAdress}
        console.log("id"+id);
        console.log("Dto"+patientUpdateDto);

      if(patientUpdateDto==null){
       
      }else{
        console.log("id"+id);
        console.log("Dto"+patientUpdateDto);
          this.isVisible = false;
          this.updatePatient(patientUpdateDto, id);
          window.location.reload();
      }
    }

    handleCancel(): void
    {
        this.isVisible = false;
    }

  //CreateModal
  createIsVisible = false;
  showCreateModal(): void
  {
      this.createIsVisible = true;
  }
  createHandleOk(): void
  {
      let patientCreateDto:PatientCreateUpdateModel =
      {
      pat_first_name: this.patCreateFirstName,
        pat_last_name: this.patCreateLastName,
        pat_insurance_no:this.patCreateInsNo,
        pat_ph_no: this.patCreatePhNo,
        pat_address: this.patCreateAdress
      }


      if (patientCreateDto == null)
      {
          console.log("Something wrong");

      }
      else
      {
          this.createIsVisible = false;
          this.createPatient(patientCreateDto);
          window.location.reload();
      }
  }

  createHandleCancel(): void
  {
      this.createIsVisible = false;
  }


  createPatient(patientCreateUpdateModel: PatientCreateUpdateModel){
      this.patientService.createPatients(patientCreateUpdateModel);
      window.location.reload();
  }

  getPatientById(id:number){
    this.patientService.getPatientById(id);
  }

  updatePatient(patientCreateUpdateModel: PatientCreateUpdateModel, id: number){
      this.patientService.updatePatients(patientCreateUpdateModel, id);
      window.location.reload();
  }

  deletePatient(id:number){
    this.patientService.deletePatients(id);
    window.location.reload();
  }

}
