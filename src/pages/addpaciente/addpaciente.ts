import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {PacientesPage} from "../pacientes/pacientes";
import {Camera, CameraOptions} from "@ionic-native/camera";

/**
 * Generated class for the AddpacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addpaciente',
  templateUrl: 'addpaciente.html',
})
export class AddpacientePage {

  resposeData : any;
  userData = {"nombre":"","apellidos":"","fecha":"","telefono":"", "sexo":"", "domicilio":"", "email": "",
              "profesion":"", "antecedentes": "", "ci": "", "user_id": "1"};
  constructor(public navCtrl: NavController,
              public authService:AuthServiceProvider,
              private camera: Camera) {
    console.log(this.userData);

  }

  openCamera(){
      const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
          // Handle error
      });
  }

 /* takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpacientePage');
  }

  savePaciente(){
    this.authService.postData(this.userData,"registerPaciente").then((result)=>{
      this.resposeData = result;
      console.log("hola");
      console.log(this.resposeData);
      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
      this.navCtrl.push(PacientesPage);
    }, (err) =>{
      console.log('conexion fallida')
    });
  }

}
