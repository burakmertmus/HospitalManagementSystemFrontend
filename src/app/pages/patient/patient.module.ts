import { NgModule } from '@angular/core';

import { PatientRoutingModule } from './patient-routing.module';

import { PatientComponent } from './patient.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [PatientComponent],
  imports: [PatientRoutingModule,NzTableModule,NzButtonModule,CommonModule,FormsModule,NzModalModule,NzDividerModule,NzInputModule],
  exports: [PatientComponent]
})
export class PatientModule { 
  
}
