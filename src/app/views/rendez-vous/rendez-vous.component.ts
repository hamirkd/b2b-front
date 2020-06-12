import { Component, OnInit } from '@angular/core';
import { Participant } from '../../models/participant.model';
import { RendezVous } from '../../models/rendez-vous';
import { ParticipantService } from '../../services/participant.service';
import { EvenementService } from '../../services/evenement.service';
import { Evenement } from '../../models/evenement.model';
import { RendezVousService } from '../../services/rendez-vous.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  constructor(
    private rendezVousService:RendezVousService,private toastr:ToastrService,
    private participantService:ParticipantService,
    private evenementService:EvenementService) { }
  data: any = {}
  pp: Participant[] = []
  ppp: RendezVous[] = [];
  rendezVousList: RendezVous[] = [];
  tables :boolean = false;
  rendezVous :boolean = false;
  horaires :boolean = false;
  evenements:Evenement[]=[];
  evenementSelected:string;
  evenementSelectedData:Evenement;
  PARTICIPANT:Participant[]=[]


  ngOnInit(): void {
    /**
     * Selection de tous les participants actifs
     */
    this.participantService.findAll().subscribe(p=>{
      this.PARTICIPANT=p;
    })
    this.evenementService.findAll().subscribe(e=>{
      this.evenements=e;
    })

  }

  selecteEvenement(){
    // console.log(this.evenementSelected)
    this.evenementSelectedData=this.evenements.find(e=>e.id==this.evenementSelected);
    this.pp = this.evenements.find(e=>e.id==this.evenementSelected).participants;
    if(!this.pp)this.pp=[]
    this.data['tables'] = 0;
    this.data['participants'] = this.pp.length;
    this.data['nbRendezVous'] = 0;
    this.data['nbRendezVousParParticipant'] = 3;
    this.data['horaires'] = 8;// en heure
    this.data['dureeReunion'] = 20;
    this.rendezVousList =[]
    this.ppp = []
    this.totalItems = this.ppp.length
    this.getRendezVous();
  }

  genererRendezVous() {
    /**
     * Croisement des participants entre eux
     * Contrainte
     * participant 1 ### participant 2
     * participant 1 => participant 2 <=> participant 2 => participant 1
     */
    this.ppp=[];
    for (let participant1 of this.pp) {
      for (let participant2 of this.pp) {
        if (this.verifierNombreRencontreParticipant(participant1))
          continue;
        if (this.verifierNombreRencontreParticipant(participant2))
          continue;
        if (participant1.id == participant2.id) continue;
        if (this.verifierPermutation(participant1, participant2)) continue;
        const rdv:RendezVous=new RendezVous();
        rdv.participant1=participant1;
        rdv.participant2=participant2;
        rdv.numeroTable='0';
        rdv.dateDebut='';
        rdv.dateFin='';
        this.ppp.push(rdv)
      }
    }
    /**
     * Calcule du nombre de rendez-vous
     */
    this.data['participants'] = this.pp.length;
    this.data['nbRendezVous'] = this.data['participants'] * this.data['nbRendezVousParParticipant'] / 2;
    this.data['nbRendezVous'] = Math.round(this.data['nbRendezVous']);
    if (this.data['nbRendezVous'] > this.ppp.length) {
      this.data['nbRendezVous'] = this.ppp.length;
    }
    /** Le nombre table est calculé s'il n'est pas défini */
    console.log(this.data['tables'])
    if (this.data['tables'] == 0) {
      this.data['tables'] = this.data['nbRendezVous'] * this.data['dureeReunion']
        / (this.data['horaires'] * 60);
      console.log(this.data['tables'], Math.round(this.data['tables']));
      if (this.data['tables'] > Math.round(this.data['tables'])) {
        this.data['tables'] = Math.round(this.data['tables']) + 1;
      }
      else {
        this.data['tables'] = Math.round(this.data['tables']);
      }
    }
    /**
     * Le nombre de table ne doit pas depasser la moitié du nombre de participant
     */
    if (this.data['tables'] > Math.round(this.ppp.length / 2)) {
      this.data['tables'] = Math.round(this.ppp.length / 2);
    }

    /** Nous allons ordonner les rendez-vous en fonction du nombre de reunion par participant
     * D'abord, nous nous rassurons que tout les participants ont une reunion avant d'ajouter
     * une autre dans la liste des ordres
     */
    let pppOrdre: RendezVous[] = [];
    let ppp: RendezVous[] = JSON.parse(JSON.stringify(this.ppp));

    for (let i = 1; i <= this.data['nbRendezVousParParticipant']; i++) {
      for (let k = 0; k < ppp.length; k++) {
        let p = ppp[k];
        if (this.verifierNombreRencontreOrdre(p.participant1, i, pppOrdre) ||
          this.verifierNombreRencontreOrdre(p.participant2, i, pppOrdre)) {
          continue;
        }
        pppOrdre.push(p);
        ppp.splice(k, 1);
        k--;
      }
    }
    this.ppp = pppOrdre;

    /** Affectation du numero de table au reunion 
     * Nous parcourons la liste ordonnée des rendez-vous et nous attribuons le numero
     *  de table
    */
    let numeroTable = 0;
    let date = new Date(this.evenementSelectedData.dateFin);
    date.setHours(8, 0, 0);
    let date2 = new Date(this.evenementSelectedData.dateFin);
    date2.setHours(8, this.data['dureeReunion'], 0);
    for (let p of this.ppp) {
      numeroTable++;
      p.numeroTable = ""+numeroTable
      p.dateDebut = JSON.parse(JSON.stringify(date));
      p.dateFin = JSON.parse(JSON.stringify(date2));
      if (date2.getHours() >= 16) {
        date.setDate(date2.getDate() + 1)
        date.setHours(8, 0, 0);
        date2.setDate(date2.getDate() + 1)
        date2.setHours(8, this.data['dureeReunion'], 0);
      }
      if (numeroTable == this.data['tables']) {
        numeroTable = 0;
        date.setMinutes(date.getMinutes() + this.data['dureeReunion'])
        date2.setMinutes(date2.getMinutes() + this.data['dureeReunion'])
      }
    }

    let page = this.currentPage * this.itemsPerPage;
    this.totalItems = this.ppp.length
    this.rendezVousList = this.ppp;
    this.rendezVousList.slice(page, page + this.itemsPerPage);

  }

  verifierPermutation(participant1, participant2) {
    for (let p of this.ppp) {
      if (p.participant1 == participant1 && p.participant2 == participant2 || p.participant2 == participant1 && p.participant1 == participant2)
        return true;
    }
    return false;
  }

  verifierNombreRencontreParticipant(participant1: Participant) {
    let nombre = 0;
    this.ppp.forEach(p => {
      if (participant1.id == p.participant1.id || participant1 == p.participant2) nombre++;
    })
    return nombre >= this.data['nbRendezVousParParticipant'];
  }
  verifierNombreRencontreOrdre(participant1: Participant, nbRendezVousParParticipant, ppp) {
    let nombre = 0;
    ppp.forEach(p => {
      if (participant1.id == p.participant1.id || participant1.id == p.participant2.id) nombre++;
    })
    return nombre >= nbRendezVousParParticipant;
  }

  totalItems: number = 64;
  currentPage: number = 0;
  smallnumPages: number = 0;

  maxSize: number = 7;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;
  itemsPerPage = 10
  currentPager: number = 4;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    let page = (event.page - 1) * this.itemsPerPage;
    this.rendezVousList = this.ppp.slice(page, page + this.itemsPerPage);
  }

  /**
   * Enregistrement de données de parametrage
   */
  saveData(title, myInterval) {
    this.data[title] = myInterval;
  }

  sauvegarder(){
    for(const rdv of this.ppp){
      rdv.evenement=this.evenementSelectedData;
      rdv.evenement.participants=null;
      rdv.participant1.competences=null;
    }
    this.rendezVousService.sauvegarderRendezVousGenerer(this.ppp).subscribe(o=>{
      this.toastr.success("Les rendez-vous ont été enregistré avec succès");
      console.log(o);
    },err=>{
      this.toastr.error("Impossible d'enregistrer, Veuillez reéssayer");
      console.log(err);
    })
  }

  getRendezVous(){
    this.rendezVousService.findByEvenement(this.evenementSelected).subscribe(e=>{
      this.ppp = e;
      let page = this.currentPage * this.itemsPerPage;
      this.totalItems = this.ppp.length
      this.rendezVousList = this.ppp;
      this.rendezVousList.slice(page, page + this.itemsPerPage);
      console.log(e)
    },err=>console.log(err));
  }


}
