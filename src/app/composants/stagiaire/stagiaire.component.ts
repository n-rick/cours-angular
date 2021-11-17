import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  nom: string = "";
  prenom: string = "";
  // injection de dépendance :
  constructor(private route: ActivatedRoute) { }

  // version asynchrone
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (resp) => {
        this.nom = resp.get('nom') ?? "";
        this.prenom = resp.get('prenom') ?? "";
      }
    )
  }

  // version synchrone
  // ngOnInit(): void {
  //   this.nom = this.route.snapshot.params['nom'];
  //   this.prenom = this.route.snapshot.params['prenom'];
  // }

}
