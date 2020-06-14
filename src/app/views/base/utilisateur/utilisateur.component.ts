import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../../models/utilisateur.model';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs:Utilisateur[]=[];
  constructor(private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurService.findAll().subscribe(utilisateurs=>{
      this.utilisateurs=utilisateurs;
    })
  }
}
