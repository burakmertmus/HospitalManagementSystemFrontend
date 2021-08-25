import { NgModule } from '@angular/core';

import { PatientRoutingModule } from './patient-routing.module';

import { PatientComponent } from './patient.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [PatientComponent],
  imports: [PatientRoutingModule,NzTableModule,NzButtonModule,CommonModule,FormsModule,NzModalModule],
  exports: [PatientComponent]
})
export class PatientModule { 
  
}
