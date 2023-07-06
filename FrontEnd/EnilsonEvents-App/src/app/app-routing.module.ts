import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Eventos',
    pathMatch: 'full'
  },
  {
    path: 'Eventos',
    component: EventosComponent
  },
  {
    path: 'Palestrantes',
    component: PalestrantesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
