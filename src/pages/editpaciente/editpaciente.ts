import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {PerfilpacientePage} from "../perfilpaciente/perfilpaciente";

/**
 * Generated class for the EditpacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editpaciente',
  templateUrl: 'editpaciente.html',
})
export class EditpacientePage {
  public resposeData : any;
  public Data: any;
  pacienteData = {"id":"","nombre":"","apellidos":"","fecha":"","telefono":"", "sexo":"", "domicilio":"", "email": "",
        "profesion":"", "antecedentes": "", "ci": "", "user_id": "1"};
  public json: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public  authService: AuthServiceProvider,) {
      //this.updatePaciente(this.navParams.get('id'));
      this.getPaciente(this.navParams.get('id'));

  }

  getPaciente(id){
      this.authService.getAll( "registerPaciente/"+id).then((result)=> {
            this.json = result;
            this.pacienteData= this.json.paciente;
            console.log(this.json);
            console.log(this.pacienteData);
            console.log(this.json.paciente.profesion);

        }, (err)=>{
        });
  }

  updatePaciente(id){
     this.authService.patchData(this.pacienteData,"registerPaciente/"+id);
     this.resposeData = this.authService.patchData(this.pacienteData,"registerPaciente/"+id);
     console.log(this.resposeData);
      this.navCtrl.push(PerfilpacientePage,{id: id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditpacientePage');
  }

}
