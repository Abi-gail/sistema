import { Component, ViewChild } from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {AgendaPage} from "../pages/agenda/agenda";
import {PacientesPage} from "../pages/pacientes/pacientes";
import {IngresosPage} from "../pages/ingresos/ingresos";
import {HistorialesPage} from "../pages/historiales/historiales";
import {ServiciosPage} from "../pages/servicios/servicios";
import {ConfiguracionPage} from "../pages/configuracion/configuracion";
import {FichahistoriaPage} from "../pages/fichahistoria/fichahistoria";


export interface MenuItem {
  title: string;
  component: any;
  icon: string;

}
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = PacientesPage;
  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
  ) {
    this.iniciarApp();
    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Agenda', component: AgendaPage, icon: 'md-calendar'},
      {title: 'Pacientes', component: PacientesPage, icon: 'md-person'},
      {title: 'Historiales Clinicos', component: HistorialesPage, icon: 'md-clipboard'},
      {title: 'Servicios', component: ServiciosPage, icon: 'md-medkit'},
      {title: 'Ingreso', component: IngresosPage, icon: 'md-cash'},
      {title: 'Configuracion', component: ConfiguracionPage, icon: 'md-settings'},

    ];
  }
  iniciarApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //this.splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
