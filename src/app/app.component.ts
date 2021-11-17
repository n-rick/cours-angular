import { Component } from '@angular/core';
import { Stagiaire } from './classes/stagiaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cours-angular';
  stagiaire: Stagiaire = new Stagiaire(100, "Wick", "John");
  stagiaires: Array<Stagiaire> = [
    new Stagiaire(100, 'Wick', 'John'),
    new Stagiaire(101, 'Abruzzi', 'John'),
    new Stagiaire(102, 'Marley', 'Bob'),
    new Stagiaire(103, 'Segal', 'Steven')
    ];

  direBonjour(): string {
    return "Bonjour";
  }

  tab = [2, -4, 9, 0, 23, 17, -26];
  tab1 = [1, 2, 3, 0];
  displayBonjour(){
    alert("bonjour");
  }

  moyennes = [18, 5, 11, 15, 10, 13, 16];

}
