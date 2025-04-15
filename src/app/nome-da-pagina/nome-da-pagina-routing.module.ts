import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomeDaPaginaPage } from './nome-da-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: NomeDaPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomeDaPaginaPageRoutingModule {}
