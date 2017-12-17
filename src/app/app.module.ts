import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ChoixPage} from '../pages/choix/choix';
import {InfogeneralPage} from '../pages/infogeneral/infogeneral';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SQLite} from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import {VetementinfoPage} from '../pages/vetementinfo/vetementinfo';
import {VetementvalidationPage} from '../pages/vetementvalidation/vetementvalidation';
import {SearchresultPage} from '../pages/searchresult/searchresult';

import {Camera} from "@ionic-native/camera";
import {ImagePicker} from "@ionic-native/image-picker";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { HttpModule} from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChoixPage,
    InfogeneralPage,
    VetementinfoPage,
    SearchresultPage,
    VetementvalidationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChoixPage,
    InfogeneralPage,
    VetementinfoPage,
    SearchresultPage,
    VetementvalidationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Camera,
    ImagePicker,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Toast
  ]
})
export class AppModule {}
