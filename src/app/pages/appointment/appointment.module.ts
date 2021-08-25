import { NgModule } from '@angular/core';

import { AppointmentRoutingModule } from './appointment-routing.module';

import { AppointmentComponent } from './appointment.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
@NgModule({  
  declarations: [AppointmentComponent],
  imports: [AppointmentRoutingModule,NzTableModule,NzButtonModule,CommonModule,FormsModule,NzModalModule,NzDividerModule,NzInputModule,NzDatePickerModule],
  exports: [AppointmentComponent]
})
export class AppointmentModule { 
  
}
