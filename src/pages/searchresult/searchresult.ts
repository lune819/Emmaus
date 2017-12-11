import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchresult',
  templateUrl: 'searchresult.html',
})
export class SearchresultPage {
  public Genre;
  public Categorie;
  public NomObjet;
  public Couleur;
  public Marque;
  public Matiere;
  public Etat;
  public Prix;
  public Quantite;
  public Vintage;
  public Description;
  public Poid;
  public avatar1;
  public avatar2;
  public avatar3;
  public avatar4;
  public avatar5;
  public avatar6;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Genre = this.navParams.get('Genre');
    this.Categorie = this.navParams.get('Categorie');
    this.NomObjet = this.navParams.get('NomObjet');
    this.Couleur = this.navParams.get('Couleur');
    this.Marque = this.navParams.get('Marque');
    this.Matiere = this.navParams.get('Matiere');
    this.Etat = this.navParams.get('Etat');
    this.Prix = this.navParams.get('Prix');
    this.Quantite = this.navParams.get('Nombre');
    this.Vintage = this.navParams.get('Vintage');
    this.Description = this.navParams.get('Description');
    this.Poid = this.navParams.get('Poid');
    this.avatar1 = this.navParams.get('Image1');
    this.avatar2 = this.navParams.get('Image2');
    this.avatar3 = this.navParams.get('Image3');
    this.avatar4 = this.navParams.get('Image4');
    this.avatar5 = this.navParams.get('Image5');
    this.avatar6 = this.navParams.get('Image6');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchresultPage');
  }

}
