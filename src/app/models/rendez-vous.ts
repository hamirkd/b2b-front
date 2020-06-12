import { Participant } from './participant.model';
import { Evenement } from './evenement.model';

export class RendezVous{
    id:string;
    participant1:Participant;
    participant2:Participant;
    dateDebut:any;
    dateFin:any;
    numeroTable:string;
    duree:number;
    evenement:Evenement;
}