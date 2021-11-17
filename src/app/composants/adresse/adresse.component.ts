import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  rue = "";
  ville = "";
  codePostal = "";
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
    (resp) => {
      this.rue = resp.get('rue') ?? "";
      this.ville = resp.get('ville') ?? "";
      this.codePostal = resp.get('codePostal') ?? "";
      }
    )
  }
  // ngOnInit(): void {
  //     this.rue = this.route.snapshot.queryParams['rue'] ?? " 30 avenue des Champs";
  //     this.ville = this.route.snapshot.queryParams['ville'] ?? "Aix-en-Provence";
  //     this.codePostal = this.route.snapshot.queryParams['codePostal'] ?? "13100";
  // }

  goToStagiaire(){
    this.router.navigate(['/stagiaire', "messi", "lionel"]);
  }
}
