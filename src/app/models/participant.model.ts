import { Utilisateur } from './butilisateur.model';
import { Societe } from './societe.model';
import { Pays } from './bpays.model';
import { Competence } from './competence.models';
import { Notification } from './bnotification.model';
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