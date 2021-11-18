import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './adresse/adresse.component';
import { FormComponent } from './form/form.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ObservableComponent } from './observable/observable.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  {path:'stagiaire', component: StagiaireComponent},
  {path:'stagiaire/:nom/:prenom', component: StagiaireComponent},
  {path:'adresse', component: AdresseComponent},
  {path:'observable', component: ObservableComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
