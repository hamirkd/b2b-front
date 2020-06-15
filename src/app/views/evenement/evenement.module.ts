import { NgModule } from '@angular/core';

import { EvenementComponent } from './evenement.component';
import { FormsModule } from '@angular/forms';
import { EvenementRoutingModule } from './evenement-routing.module';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared-module';
import { EvenementEditComponent } from './evenement-edit/evenement-edit.component';
import { MonChoixComponent } from './mon-choix/mon-choix.component';



@NgModule({
  declarations: [EvenementComponent, EvenementEditComponent, MonChoixComponent],
  imports: [CommonModule,
    FormsModule,
    EvenementRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),SharedModule
  ]
},
)
export class EvenementModule { }