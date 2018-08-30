import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthServiceProvider} from "../providers/auth-service/auth-service";
import {HttpClientModule} from "@angular/common/http";


import { WelcomePage} from "../pages/welcome/welcome";
import { LoginPage} from "../pages/login/login";
import { RegisterPage} from "../pages/register/register";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AgendaPage} from "../pages/agenda/agenda";
import {HistorialesPage} from "../pages/historiales/historiales";
import {PacientesPage} from "../pages/pacientes/pacientes";
import {ServiciosPage} from "../pages/servicios/servicios";
import {IngresosPage} from "../pages/ingresos/ingresos";
import {AddpacientePage} from "../pages/addpaciente/addpaciente";
import {PerfilpacientePage} from "../pages/perfilpaciente/perfilpaciente";
import {EditpacientePage} from "../pages/editpaciente/editpaciente";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MomentModule } from 'angular2-moment/moment.module';

import {Camera} from "@ionic-native/camera";
import {FichahistoriaPage} from "../pages/fichahistoria/fichahistoria";
import {AccordionComponent} from "../components/accordion/accordion";
import {EspecialidadComponent} from "../components/especialidad/especialidad";
import {TratamientoComponent} from "../components/tratamiento/tratamiento";
import {SearchPipe} from "../pipes/search/search";
import {Network} from "@ionic-native/network";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AgendaPage,
    HistorialesPage,
    PacientesPage,
    ServiciosPage,
    IngresosPage,
    AddpacientePage,
    PerfilpacientePage,
    EditpacientePage,
    FichahistoriaPage,

    AccordionComponent,
    EspecialidadComponent,
    TratamientoComponent,

    SearchPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    RegisterPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AgendaPage,
    HistorialesPage,
    PacientesPage,
    ServiciosPage,
    IngresosPage,
    AddpacientePage,
    PerfilpacientePage,
    EditpacientePage,
    FichahistoriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Network

  ]
})
export class AppModule {}
