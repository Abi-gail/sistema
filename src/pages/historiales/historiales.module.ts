import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialesPage } from './historiales';

@NgModule({
  declarations: [
    HistorialesPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorialesPage),
  ],
})
export class HistorialesPageModule {}
