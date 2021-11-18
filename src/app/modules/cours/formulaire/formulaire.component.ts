import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  personne:Personne = {};
  personnes:Personne[] = [];
  constructor() { }

  ngOnInit(): void { }

  ajouterPersonne(){
    this.personnes.push(this.personne);
    console.log(this.personne);
    this.personne = {};
  }
}
