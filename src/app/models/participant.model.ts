export class Participant{
    id:number;
    etatCivil:'M'|'Mme'|'Mlle'='M';
    societe:string;
    responsable:string;
    competence:string;
    status:boolean;
    evenement?:string;
}