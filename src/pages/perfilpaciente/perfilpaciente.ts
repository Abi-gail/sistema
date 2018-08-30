import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {EditpacientePage} from "../editpaciente/editpaciente";
import {HistorialesPage} from "../historiales/historiales";
import {FichahistoriaPage} from "../fichahistoria/fichahistoria";

/**
 * Generated class for the PerfilpacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfilpaciente',
  templateUrl: 'perfilpaciente.html',
})
export class PerfilpacientePage {

  public  pacienteData : any;
  public  json : any;

  constructor(
    public navCtrl: NavController,
    public app: App ,
    public  authService: AuthServiceProvider,
    public  navParams: NavParams,
    private  alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

    this.getPaciente(this.navParams.get('id'));
  }

    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
             //cssClass: 'transparent',
        });


        loading.present();

        setTimeout(() => {
            loading.dismiss();
        }, 5000);
    }

    getPaciente(id){
    //console.log(this.authService.getAll( "registerPaciente/"+id));
        let loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'preparando',
            //cssClass: 'spinner'

        });
        loading.present();
        setTimeout(() => {
            this.authService.getAll( "registerPaciente/"+id).then((result)=> {
                this.json = result;
                this.pacienteData= this.json.paciente;
                console.log(this.json);
                console.log(this.pacienteData);
                console.log(this.json.paciente.image);

            }, (err)=>{
            });
            loading.dismiss();
        }, 2000);
    }
    eliminarPaciente(id){
          let alert = this.alertCtrl.create({
              title: 'Eliminar Paciente',
              message: 'Desea eliminar al paciente?',
              buttons: [
                  {
                      text: 'Cancel',
                      role: 'cancel',
                      handler: () => {
                          console.log('Cancel clicked');
                      }
                  },
                  {
                      text: 'Eliminar',
                      handler: () => {
                          /*this.http.delete("http://127.0.0.1:8000/api/registerPaciente/"+id).subscribe(
                              resp => console.log('eliminado')
                          );*/
                          this.authService.deleteData("registerPaciente/"+id);

                      }
                  }
              ]
          });
          alert.present();
     }
     editarPaciente(id){
         this.navCtrl.push(EditpacientePage,{id: id});
     }
     openPage(){
        this.navCtrl.push(FichahistoriaPage);
     }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilpacientePage');
  }

}
