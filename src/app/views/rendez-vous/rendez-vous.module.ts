import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendezVousComponent } from './rendez-vous.component';
import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../../shared-module';
import { RendezVousEditComponent } from './rendez-vous-edit/rendez-vous-edit.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [RendezVousComponent, RendezVousEditComponent],
  imports: [
    CommonModule,
    RendezVousRoutingModule,
    FormsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),SharedModule
  ]
  ,
  providers:[NgbActiveModal,NgbModal]
})
export class RendezVousModule { }
