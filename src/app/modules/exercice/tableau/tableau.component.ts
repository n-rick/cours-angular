import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  numbers = [2, 3, 8, 1];
  indice: number = 0;
  pagePrecedent = '';
  pageSuivante = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (resp) => {
        this.indice = Number(resp.get('indice') ?? 0);
        if(this.numbers.length && this.indice > 0){
          this.pagePrecedent = `/exercice/tableau/${this.indice-1}`;
        }
        if(this.numbers.length && this.indice < 3){
          this.pageSuivante = `/exercice/tableau/${this.indice+1}`;
        }else{
          this.pageSuivante = `/exercice/tableau/0`;
          this.pagePrecedent = `/exercice/tableau/0`;
        }
      }
    )
  }
}
