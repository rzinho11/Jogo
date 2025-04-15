import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomeDaPaginaPageRoutingModule } from './nome-da-pagina-routing.module';

import { NomeDaPaginaPage } from './nome-da-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomeDaPaginaPageRoutingModule
  ],
  declarations: [NomeDaPaginaPage]
})
export class NomeDaPaginaPageModule {}
