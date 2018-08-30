import { Component } from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';
import {AddpacientePage} from "../addpaciente/addpaciente";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {PerfilpacientePage} from "../perfilpaciente/perfilpaciente";

import  * as _ from 'lodash';

/**
 * Generated class for the PacientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
})
export class PacientesPage {

  public  resposeData : any;
  public  paciente : any[];



  private allPacientes: any;
  public pacient: any;
  queryText: string;


  constructor(public navCtrl: NavController,  public app: App , public  authService: AuthServiceProvider) {
      this.authService.getAll( "registerPaciente").then((result)=> {
          this.resposeData = result;
          this.pacient = this.resposeData.pacientes;
          this.allPacientes = this.pacient;
          console.log(this.pacient);
      }, (err)=>{

      });
    this.getPaciente();
    this.queryText = '';
  }
  getPaciente(){
    this.authService.getAll( "registerPaciente").then((result)=> {
      this.resposeData = result;
      this.paciente = this.resposeData.pacientes;
      console.log(this.paciente);
    }, (err)=>{

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacientesPage');
  }
  adicionar(){
    this.navCtrl.push(AddpacientePage);
  }
   more( id ){
    this.navCtrl.push(PerfilpacientePage,{id: id});
    console.log(id);
  }
 /* buscarPacientes(ev: any){
    this.authService.getAll("registerPaciente").then((rerult)=>{
      this.getDatos = rerult;
      this.getpacientes = this.resposeData.pacientes;
      console.log(this.getpacientes);
      for(let i in this.getpacientes){
         this.items = this.getpacientes[i].nombre;
         console.log(this.items);
      }
    }, (err)=>{

    });
    const datos = ev.target.value;
    if(datos && datos.trim() !=''){
        this.items = this.items.filter((item)=>{
            return(item.toLowerCase().indexOf(datos.toLowerCase())>-1);
        })

    }
  }*/
 getItems(pac: any){
    let val = pac.target.value;
    if(val && val.trim() != ''){
      this.paciente = _.values(this.allPacientes);
      console.log(_.values(this.allPacientes));
      this.paciente = this.paciente.filter((item)=>{
          console.log(item.nombre.toLowerCase().indexOf(val.toLowerCase())>-1);

          return(item.nombre.toLowerCase().indexOf(val.toLowerCase())>-1 );
      })

    }else {
      this.paciente = this.allPacientes;
    }
 }



}
