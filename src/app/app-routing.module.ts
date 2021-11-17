import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { ObservableComponent } from './composants/observable/observable.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';

const routes: Routes = [
  {path: 'adresse', component: AdresseComponent},
  {path: 'stagiaire', component: StagiaireComponent},
  {path: 'stagiaire/:nom/:prenom', component: StagiaireComponent},
  {path: 'observable', component: ObservableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
