import { NgModule } from '@angular/core';

import { DoctorRoutingModule } from './doctor-routing.module';

import { DoctorComponent } from './doctor.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({  
  declarations: [DoctorComponent],
  imports: [DoctorRoutingModule,NzTableModule,NzButtonModule,CommonModule,FormsModule],
  exports: [DoctorComponent]
})
export class DoctorModule { 
  
}
