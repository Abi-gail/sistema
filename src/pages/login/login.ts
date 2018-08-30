import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController} from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import {HomePage} from "../home/home";
import {Observable} from 'rxjs/Observable';

import {RegisterPage} from "../register/register";
import 'rxjs/add/operator/toPromise';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  resposeData : any;
  userData = {"email":"","password":""};
  constructor(public navCtrl: NavController,
              public authService: AuthServiceProvider,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();

        setTimeout(() => {
            loading.dismiss();
        }, 5000);
    }



 public async login(){
      try{
          let loading = this.loadingCtrl.create({
              content: 'Please wait...'
          });

          loading.present();
          this.authService.postData(this.userData,"userLogin").then((result)=>{
              console.log("hola");
              setTimeout(() => {

                  this.resposeData = result;
                  //console.log(this.resposeData)


                  localStorage.setItem('userData', JSON.stringify(this.resposeData) )
                  this.navCtrl.setRoot(HomePage);
                  loading.dismiss();
              }, 5000);


          });
      }
      catch (e) {
          console.log(e);
      }
      //console.log(this.userData);

      //console.log(this.authService.postData(this.userData,"userLogin"));



  }
   /* public login(credentials) {
        if (credentials.email === null || credentials.password === null) {
            return Observable.throw("Please insert credentials.");
        } else {
            return Observable.create(observer => {

                this.http.post(AuthServiceProvider.LOGIN_URL, credentials)
                    .map(res => res.json())
                    .subscribe( data => {
                        if (data.access_token) {
                            this.token = 'Bearer ' + data.access_token;
                            this.access = true;
                        } else {
                            this.access = false;
                        }
                    });

                setTimeout(() => {
                    observer.next(this.access);
                }, 500);

                setTimeout(() => {
                    observer.complete();
                }, 1000);


            }, err => console.error(err));
        }
    }*/

}
