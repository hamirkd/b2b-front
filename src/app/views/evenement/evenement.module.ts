import { NgModule } from '@angular/core';

import { EvenementComponent } from './evenement.component';
import { FormsModule } from '@angular/forms';
import { EvenementRoutingModule } from './evenement-routing.module';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '../../shared-module';



@NgModule({
  declarations: [EvenementComponent],
  imports: [CommonModule,
    FormsModule,
    EvenementRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    PaginationModule.forRoot(),SharedModule
  ]
},
)
export class EvenementModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}