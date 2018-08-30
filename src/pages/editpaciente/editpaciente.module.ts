import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditpacientePage } from './editpaciente';

@NgModule({
  declarations: [
    EditpacientePage,
  ],
  imports: [
    IonicPageModule.forChild(EditpacientePage),
  ],
})
export class EditpacientePageModule {}
