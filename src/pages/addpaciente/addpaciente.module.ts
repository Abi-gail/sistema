import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddpacientePage } from './addpaciente';

@NgModule({
  declarations: [
    AddpacientePage,
  ],
  imports: [
    IonicPageModule.forChild(AddpacientePage),
  ],
})
export class AddpacientePageModule {}
