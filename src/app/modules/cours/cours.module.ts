import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { ObservableComponent } from './observable/observable.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    StagiaireComponent,
    AdresseComponent,
    ObservableComponent,
    FormulaireComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule
  ]
})
export class CoursModule { }
