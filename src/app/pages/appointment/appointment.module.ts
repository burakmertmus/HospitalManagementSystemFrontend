import { NgModule } from '@angular/core';

import { AppointmentRoutingModule } from './appointment-routing.module';

import { AppointmentComponent } from './appointment.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({  
  declarations: [AppointmentComponent],
  imports: [AppointmentRoutingModule,NzTableModule,NzButtonModule,CommonModule,FormsModule],
  exports: [AppointmentComponent]
})
export class AppointmentModule { 
  
}
