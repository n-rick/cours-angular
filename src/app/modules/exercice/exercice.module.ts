import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { TableauComponent } from 'src/app/modules/exercice/tableau/tableau.component';
import { CalculComponent } from 'src/app/modules/exercice/calcul/calcul.component';
import { EvenValuePipe } from 'src/app/pipes/even-value.pipe';
import { CalculetteComponent } from './calculette/calculette.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableauComponent,
    CalculComponent,
    EvenValuePipe,
    CalculetteComponent,
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ExerciceModule { }
