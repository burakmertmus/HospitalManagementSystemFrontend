import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
  imports: [WelcomeRoutingModule,NzButtonModule,NzCardModule,NzGridModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { 
  
}
