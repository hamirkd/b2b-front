import { NgModule } from '@angular/core';
import { ParticipantComponent } from './participant.component';
import { FormsModule } from '@angular/forms';
import { ParticipantRoutingModule } from './participant-routing.module';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '../../shared-module';



@NgModule({
  declarations: [ParticipantComponent],
  imports: [CommonModule,
    FormsModule,
    ParticipantRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    PaginationModule.forRoot(),SharedModule
  ],
  providers:[TranslateService]
},
)
export class ParticipantModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}