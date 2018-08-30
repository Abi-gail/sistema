import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FichahistoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fichahistoria',
  templateUrl: 'fichahistoria.html',
})
export class FichahistoriaPage {

  constructor(public app: App,
              public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FichahistoriaPage');
  }


}
