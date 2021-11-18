import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './composants/error/error.component';
import { HomeComponent } from './composants/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'adresse', component: AdresseComponent},
  // {path: 'stagiaire', component: StagiaireComponent},
  // {path: 'stagiaire/:nom/:prenom', component: StagiaireComponent},
  // {path: 'observable', component: ObservableComponent},
  {
    path: 'cours',
    loadChildren: () => import('./modules/cours/cours.module').then(m => m.CoursModule)
  },
  // {path: 'tableau/:indice', component: TableauComponent},
  // {path: 'calcul/:op', component: CalculComponent},
  {
    path:'exercice',
    loadChildren: () => import('./modules/exercice/exercice.module').then(m => m.ExerciceModule)
  },
  {
    path: 'vehicule',
    loadChildren: () => import('./modules/vehicule/vehicule.module').then(m => m.VehiculeModule)
  },
  {path: 'error', component: ErrorComponent},
  {path:'**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
