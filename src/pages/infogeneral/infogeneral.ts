import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VetementinfoPage} from '../vetementinfo/vetementinfo';

/**
 * Generated class for the InfogeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infogeneral',
  templateUrl: 'infogeneral.html',
})
export class InfogeneralPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfogeneralPage');
  }
  change(c,nom){
    if(c=='Vetement-femme'||c=='Vetement-homme'){
      this.navCtrl.push(VetementinfoPage,{
        Nom: nom,
        Categorie: c
  });
    }
  }

}
