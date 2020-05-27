import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonCompteComponent } from './mon-compte.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../../shared-module';
import { MonCompteRoutingModule } from './mon-compte-routing.module';



@NgModule({
  declarations: [MonCompteComponent],
  imports: [
    CommonModule,
    MonCompteRoutingModule,
    FormsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),SharedModule
  ]
})
export class MonCompteModule { }
