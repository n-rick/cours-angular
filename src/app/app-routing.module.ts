import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { CalculComponent } from './composants/calcul/calcul.component';
import { ErrorComponent } from './composants/error/error.component';
import { HomeComponent } from './composants/home/home.component';
import { ObservableComponent } from './composants/observable/observable.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { TableauComponent } from './composants/tableau/tableau.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'adresse', component: AdresseComponent},
  {path: 'stagiaire', component: StagiaireComponent},
  {path: 'stagiaire/:nom/:prenom', component: StagiaireComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'tableau/:indice', component: TableauComponent},
  {path: 'calcul/:op', component: CalculComponent},
  {path: 'error', component: ErrorComponent},
  {path:'**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
