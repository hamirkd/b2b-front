import { Competence } from './competence.models';
import { Participant } from './participant.model';

export class Notification {
    id: string;
    contenu: string;
    cible:'UNIQUE'|'TOUS';
    competence:Competence[];
    participant:Participant[];
    dateCreation:Date;
    dateModification:Date;
}