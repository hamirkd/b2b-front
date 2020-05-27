import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesRendezVousComponent } from './mes-rendez-vous.component';
import { MesRendezVousRoutingModule } from './mes-rendez-vous-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../../shared-module';



@NgModule({
  declarations: [MesRendezVousComponent],
  imports: [
    CommonModule,
    MesRendezVousRoutingModule,
    FormsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),SharedModule
  ]
})
export class MesRendezVousModule { }
