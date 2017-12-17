import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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

  data:any = {};
  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http = http;
    
    this.NomObjet = this.navParams.get('NomObjet');
    var link = 'http://tuxa.sme.utc/~na17a023/searchbynom.php';
    var myData = JSON.stringify({ NomObjet: this.NomObjet });
    /*
    this.http.post(link, myData)
    .map(res => res.json())
    .subscribe(data => {
      //this.data.response = data["_body"];
      this.posts = data.data;
    }, error => {
        console.log("Oooops!");
    });*/
    this.http.get('http://tuxa.sme.utc/~na17a023/testid.php').map(res => res.json()).subscribe(data => {
      this.posts = data.data;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchresultPage');
  }

  search_par_nom(){
    var link = 'http://tuxa.sme.utc/~na17a023/searchbynom.php';
    var myData = JSON.stringify({ NomObjet: this.NomObjet });
    this.http.post(link, myData)
    .subscribe(data => {
      this.data.response = data["_body"];
    }, error => {
        console.log("Oooops!");
    });
  }




}
