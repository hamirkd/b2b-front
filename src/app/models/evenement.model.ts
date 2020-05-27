import { Competence } from './competence.models';

export class Evenement{
    id:string;
    titre:string;
    description:string;
    competences:Competence[];
    dateDebut:Date|string;
    dateFin:Date|string;
    nombreParticipant:'ILIMITE'|'LIMITE'='ILIMITE';
    nombre:number=0;
}