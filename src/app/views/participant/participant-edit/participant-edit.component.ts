import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.component.html',
  styleUrls: ['./participant-edit.component.css']
})
export class ParticipantEditComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
