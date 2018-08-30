import { Component } from '@angular/core';

import { NavController, App} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {MenuController} from "ionic-angular/umd";


import { Network } from '@ionic-native/network';

//import { AuthServiceProvider} from "../../providers/auth-service/auth-service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userDetails : any;
  public resposeData: any;
    public  paciente : any[];



    userPostData = {"email": "", "token":""};

  constructor(public navCtrl: NavController, public app: App,
              public  authService: AuthServiceProvider,
              private network: Network) {

      let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
          console.log('network was disconnected :-(');
      });

      disconnectSubscription.unsubscribe();

      let connectSubscription = this.network.onConnect().subscribe(() => {
          console.log('network connected!');
          // We just got a connection but we need to wait briefly
          // before we determine the connection type. Might need to wait.
          // prior to doing any api requests as well.
          setTimeout(() => {
              if (this.network.type === 'wifi') {
                  console.log('we got a wifi connection, woohoo!');
                  this.getPaciente();
              }
          }, 3000);
      });
      connectSubscription.unsubscribe();




      const data =  JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.success;


  }

    getPaciente(){
        this.authService.getAll( "registerPaciente").then((result)=> {
            this.resposeData = result;
            this.paciente = this.resposeData.pacientes;
        }, (err)=>{

        });
    }


  backToWelcome(){
    const root = this.app.getRootNav();
    root.popToRoot();
  }
  salir(){
    //api Token
    localStorage.clear();
    setTimeout(()=> this.backToWelcome(),1000);
  }





}
