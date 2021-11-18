import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  op: string = "";
  value1: number = 0;
  value2: number = 0;
  result: number = 0;
  divisionParZero: string | null = null;


  constructor(private route: ActivatedRoute) { }

  //   ngOnInit(): void {
  //     this.route.paramMap.subscribe(
  //       resp => {
  //         this.op = resp.get('op') ?? "plus";
  //         switch (this.op) {
  //           case "plus":
  //             this.op = "Addition";
  //             this.route.queryParamMap.subscribe(
  //               resp =>{
  //                 this.value1 = Number(resp.get('value1'));
  //                 this.value2 = Number(resp.get('value2'));
  //                 this.result = this.value1 + this.value2;
  //               }
  //             )
  //             break;   
  //           case "moins":
  //             this.op = "Soustraction";
  //             this.route.queryParamMap.subscribe(
  //               resp =>{
  //                 this.value1 = Number(resp.get('value1'));
  //                 this.value2 = Number(resp.get('value2'));
  //                 this.result = this.value1 - this.value2;
  //               }
  //             )
  //             break;   
  //           case "fois":
  //             this.op = "Multiplication";
  //             this.route.queryParamMap.subscribe(
  //               resp =>{
  //                 this.value1 = Number(resp.get('value1'));
  //                 this.value2 = Number(resp.get('value2'));
  //                 this.result = this.value1 * this.value2;
  //               }
  //             )
  //             break;   
  //           case "div":
  //             this.op = "Division";
  //             this.route.queryParamMap.subscribe(
  //               resp =>{
  //                 this.value1 = Number(resp.get('value1'));
  //                 this.value2 = Number(resp.get('value2'));
  //                 //this.result = this.value1 / this.value2;
  //                 if(this.value2 == 0){
  //                   this.divisionParZero ="Division impossible !";
  //                 }
  //                 else{
  //                   this.result = this.value1 / this.value2;
  //                 }
  //               }
  //             )
  //             break;   
  //           default:
  //             this.op = "Opération inconnue";
  //             this.value1 = Number(null);
  //             this.value2 = Number(null);
  //             this.result = Number(null);
  //             break;
  //         }
  //       }
  //     )
  //   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      resp => {
        const operateur = resp.get('op') ?? "plus";
        this.route.queryParamMap.subscribe(
          res => {
            this.value1 = Number(res.get('value1'));
            this.value2 = Number(res.get('value2'));
            switch (operateur) {
              case "plus":
                this.op = '+';
                break;
              case "fois":
                this.op = '*';
                break;
              case "moins":
                this.op = '-';
                break;
              case "div":
                this.op = '/';
                if (this.value2 == 0) {
                  this.divisionParZero = "division par zéros impossible !";
                  return;
                }
                break;
              default:
                this.op = "inconnu"
                this.divisionParZero = "Opérateur inconnu !";
                return;
            }
            this.result = eval(this.value1 + this.op + this.value2);
          }
        )
      }
    )
  }
}
