import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  personnes:Array<Personne> = [];

  // personneForm = new FormGroup({
  //   nom: new FormControl('', Validators.required),
  //   prenom:  new FormControl('', [Validators.required, Validators.pattern(/^[A-Z]{1}[a-z].{2,20}$/)]),
  //   adresse: new FormGroup({
  //     rue: new FormControl(),
  //     ville: new FormControl(),
  //     codePotal: new FormControl(),
  //   })
  // });

    // avec un formBuilder :
    personneForm = this.fb.group({
      nom:  ['',Validators.required],
      prenom:  ['', [Validators.required, Validators.pattern(/^[A-Z]{1}[a-z].{2,20}$/)]],
      adresse: this.fb.group({
        rue: [''],
        ville: [''],
        codePostal: [''],
      })
    });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  ajouterPersonne(){
    this.personnes.push(this.personneForm.value);
    console.log(this.personneForm.value);
    this.personneForm.reset();
  }
}
