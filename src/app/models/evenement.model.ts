import { Competence } from './competence.models';
import { Participant } from './participant.model';
import { Langue } from './langue.model';

export class Evenement{
    id:string;
    titre:string;
    description:string;
    competences:Competence[];
    dateDebut:Date|string;
    dateFin:Date|string;
    nombreParticipant:'ILIMITE'|'LIMITE'='ILIMITE';
    nombre:number=0;
    participants:Participant[]=[];
    langues:Langue[];
}