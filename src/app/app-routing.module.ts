import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'doctor', loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'patient', loadChildren: () => import('./pages/patient/patient.module').then(m => m.PatientModule) },
  { path: 'appointment', loadChildren: () => import('./pages/appointment/appointment.module').then(m => m.AppointmentModule) },
  
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
