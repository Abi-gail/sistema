import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";

import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  resposeData : any;
  userData = {"name":"","email":"","password":"","c_password":""};
  constructor(public navCtrl: NavController, public authService:AuthServiceProvider) {
    console.log(this.userData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    //conexion a la api

    this.authService.postData(this.userData,"userRegister").then((result)=>{
      this.resposeData = result;
      console.log("hola");
      console.log(this.resposeData);
      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
      this.navCtrl.push(HomePage);
    }, (err) =>{
       console.log('conexion fallida')
    });
  }
  login(){
    this.navCtrl.push(LoginPage);
  }

}
