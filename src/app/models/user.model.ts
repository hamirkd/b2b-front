import { Participant } from './participant.model';

export class User{
    login:string;
    password:string;
    role:'ADMIN'|'PARTICIPANT';
    participant:Participant;
}