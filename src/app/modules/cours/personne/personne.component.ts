import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personne: Personne = {};
  personnes: Personne[] = []
  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.initPerson();
  }
  ajouterPersonne(form: NgForm) {
    this.personneService.addPerson(this.personne).subscribe(
      res => {
        this.initPerson();
        form.resetForm();
      }
    )
    // this.personne = {};
  }
  supprimerPersonne(id: number | undefined = 0) {
    this.personneService.removePerson(id).subscribe(
      () => {
        this.initPerson();
      }
    )
    
  }
  initPerson() {
    this.personneService.getPersons().subscribe(
      res => {
        this.personnes = res;
      }
    )
  }
}
