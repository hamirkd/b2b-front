import { NgModule } from '@angular/core';
import { ParticipantComponent } from './participant.component';
import { FormsModule } from '@angular/forms';
import { ParticipantRoutingModule } from './participant-routing.module';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ParticipantComponent],
  imports: [CommonModule,
    FormsModule,
    ParticipantRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    
    PaginationModule.forRoot(),
  ],
})
export class ParticipantModule { }
