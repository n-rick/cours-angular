import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { ObservableComponent } from './observable/observable.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { PersonneComponent } from './personne/personne.component';
import { EditPersonneComponent } from './edit-personne/edit-personne.component';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    StagiaireComponent,
    AdresseComponent,
    ObservableComponent,
    FormulaireComponent,
    FormComponent,
    PersonneComponent,
    EditPersonneComponent,
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class CoursModule { }
