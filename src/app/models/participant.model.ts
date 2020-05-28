import { Utilisateur } from './utilisateur.model';
import { Societe } from './societe.model';
import { Pays } from './pays.model';
import { Competence } from './competence.models';
import { Notification } from './notification.model';
import { RendezVous } from './rendez-vous';

export class Participant extends Utilisateur{
    id:string;
    etatCivil:'M'|'Mme'|'Mlle'='M';
    societe:Societe;
    responsable:string;
    status:boolean;
    prenom:string;;
    fonction:string;;
    email:string;;
    telephone:string;;
    telephonePortable:string;
    activerPlanning:boolean;
    pays:Pays;
    competences:Competence[];
    notifications:Notification;
    rendezVous:RendezVous[];
}