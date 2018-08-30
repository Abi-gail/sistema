import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilpacientePage } from './perfilpaciente';

@NgModule({
  declarations: [
    PerfilpacientePage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilpacientePage),
  ],
  exports: [
    PerfilpacientePage
  ]
})
export class PerfilpacientePageModule {}
