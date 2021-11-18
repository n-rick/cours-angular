import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './adresse/adresse.component';
import { ObservableComponent } from './observable/observable.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  {path:'', component: StagiaireComponent},
  {path:'stagiaire', component: StagiaireComponent},
  {path:'adresse', component: AdresseComponent},
  {path:'observable', component: ObservableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
