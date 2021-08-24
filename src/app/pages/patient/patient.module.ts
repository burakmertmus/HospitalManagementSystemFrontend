import { NgModule } from '@angular/core';

import { PatientRoutingModule } from './patient-routing.module';

import { PatientComponent } from './patient.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PatientComponent],
  imports: [PatientRoutingModule,NzTableModule,NzButtonModule,CommonModule,FormsModule],
  exports: [PatientComponent]
})
export class PatientModule { 
  
}
