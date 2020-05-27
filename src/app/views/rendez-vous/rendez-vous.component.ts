import { Component, OnInit } from '@angular/core';
import { Participant } from '../../models/participant.model';
import { RendezVous } from '../../models/rendez-vous';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  constructor() { }
  data: any = {}
  pp: Participant[] = []
  ppp: RendezVous[] = [];
  rendezVousList: RendezVous[] = [];
  tables :boolean = false;
  rendezVous :boolean = false;
  horaires :boolean = false;
  evenements=[];
  evenementSelected:any


  ngOnInit(): void {
    /**
     * Selection de tous les participants actifs
     */

  }

  selecteEvenement(){
    // console.log(this.evenementSelected)
    this.pp = [];//PARTICIPANT.filter(p => p.status&&p.evenement==this.evenementSelected);
    this.data['tables'] = 0;
    this.data['participants'] = this.pp.length;
    this.data['nbRendezVous'] = 0;
    this.data['nbRendezVousParParticipant'] = 3;
    this.data['horaires'] = 8;// en heure
    this.data['dureeReunion'] = 20;
    this.rendezVousList =[]
    this.ppp = []
    this.totalItems = this.ppp.length
  }

  genererRendezVous() {
    /**
     * Croisement des participants entre eux
     * Contrainte
     * participant 1 ### participant 2
     * participant 1 => participant 2 <=> participant 2 => participant 1
     */
    this.ppp=[];
    for (let p1 of this.pp) {
      for (let p2 of this.pp) {
        if (this.verifierNombreRencontreParticipant(p1))
          continue;
        if (this.verifierNombreRencontreParticipant(p2))
          continue;
        if (p1.id == p2.id) continue;
        if (this.verifierPermutation(p1, p2)) continue;
        this.ppp.push({ p1: p1, p2: p2, numeroTable: 0, dateDebut: '', dateFin: '', })
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
    let pppOrdre: { p1, p2, n, numeroTable, dateDebut, dateFin }[] = [];
    let ppp: { p1, p2, n, numeroTable, dateDebut, dateFin }[] = JSON.parse(JSON.stringify(this.ppp));

    for (let i = 1; i <= this.data['nbRendezVousParParticipant']; i++) {
      for (let k = 0; k < ppp.length; k++) {
        let p = ppp[k];
        if (this.verifierNombreRencontreOrdre(p.p1, i, pppOrdre) ||
          this.verifierNombreRencontreOrdre(p.p2, i, pppOrdre)) {
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
    let date = new Date();
    date.setHours(8, 0, 0);
    let date2 = new Date();
    date2.setHours(8, this.data['dureeReunion'], 0);
    for (let p of this.ppp) {
      numeroTable++;
      p.numeroTable = numeroTable
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
    this.rendezVousList = this.ppp.slice(page, page + this.itemsPerPage);

  }

  verifierPermutation(p1, p2) {
    for (let p of this.ppp) {
      if (p.p1 == p1 && p.p2 == p2 || p.p2 == p1 && p.p1 == p2)
        return true;
    }
    return false;
  }

  verifierNombreRencontreParticipant(p1: Participant) {
    let nombre = 0;
    this.ppp.forEach(p => {
      if (p1.id == p.p1.id || p1 == p.p2) nombre++;
    })
    return nombre >= this.data['nbRendezVousParParticipant'];
  }
  verifierNombreRencontreOrdre(p1: Participant, nbRendezVousParParticipant, ppp) {
    let nombre = 0;
    ppp.forEach(p => {
      if (p1.id == p.p1.id || p1.id == p.p2.id) nombre++;
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


}
