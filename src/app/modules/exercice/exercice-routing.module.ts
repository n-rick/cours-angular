import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculComponent } from 'src/app/modules/exercice/calcul/calcul.component';
import { TableauComponent } from 'src/app/modules/exercice/tableau/tableau.component';

const routes: Routes = [
  {path:'', component: TableauComponent},
  {path:'tableau/:id', component: TableauComponent},
  {path:'calcul', component: CalculComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
