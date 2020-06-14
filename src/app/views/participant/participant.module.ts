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
import { ParticipantEditComponent } from './participant-edit/participant-edit.component';
import { ParticipantFicheComponent } from './participant-fiche/participant-fiche.component';
import { ParticipantEnteteComponent } from './participant-fiche/participant-entete/participant-entete.component';
import { ParticipantEvenementComponent } from './participant-fiche/participant-evenement/participant-evenement.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ParticipantEvenementEditComponent } from './participant-fiche/participant-evenement-edit/participant-evenement-edit.component';
import { NgbModalModule, NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseModule } from '../base/base.module';
import { RendezVousParticipantComponent } from './participant-fiche/rendez-vous-participant/rendez-vous-participant.component';


@NgModule({
  declarations: [ParticipantComponent, ParticipantEditComponent, ParticipantFicheComponent, ParticipantEnteteComponent, ParticipantEvenementComponent, ParticipantEvenementEditComponent, RendezVousParticipantComponent],
  imports: [CommonModule,
    FormsModule,
    ParticipantRoutingModule, NgbModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),CollapseModule.forRoot(),
    HttpClientModule,
    PaginationModule.forRoot(),SharedModule,BaseModule
  ],
  providers:[TranslateService,NgbActiveModal,NgbModal]
},
)
export class ParticipantModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}