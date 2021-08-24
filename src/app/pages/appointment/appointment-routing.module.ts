import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { CreateAppoinmentComponent } from './createAppoinment/createAppoinment.component';

const routes: Routes = [
  { path: '', component: AppointmentComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
