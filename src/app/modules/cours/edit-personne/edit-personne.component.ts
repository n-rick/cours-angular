import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent implements OnInit {
  personne: Personne = {};
  constructor(
    private route: ActivatedRoute,
    private personneService: PersonneService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      res => {
        const id: number = Number(res.get('id'));
        this.personneService.getPersonById(id).subscribe(
          res => {
            this.personne = res;
          }
        );
      }
    )
  }

  enregistrer() {
    this.personneService.updatePerson(this.personne).subscribe(
      () => {
        this.router.navigateByUrl('/cours/personne');
      }
    );
  }
}
