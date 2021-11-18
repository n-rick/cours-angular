import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { TableauComponent } from 'src/app/modules/exercice/tableau/tableau.component';
import { CalculComponent } from 'src/app/modules/exercice/calcul/calcul.component';


@NgModule({
  declarations: [
    TableauComponent,
    CalculComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule
  ]
})
export class ExerciceModule { }
