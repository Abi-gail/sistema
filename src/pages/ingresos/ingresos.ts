import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the IngresosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingresos',
  templateUrl: 'ingresos.html',
})
export class IngresosPage {

  constructor(public app: App,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresosPage');
  }

}
