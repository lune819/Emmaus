import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ModifierPage } from '../modifier/modifier';
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
  //Valeurs pour stocker les informations retourné par le serveur
  public Id;
  public Genre;
  public Categorie;
  public NomObjet;
  public Fournisseur;
  public Couleur;
  public Marque;
  public Matiere;
  public Etat;
  public Prix;
  public Quantite;
  public Vintage;
  public Description;
  public Poid;
  public Statut;
  public avatar1;
  public avatar2;
  public avatar3;
  public avatar4;
  public avatar5;
  public avatar6;
  public response;
  public response_traite;
  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http = http;
    //Obtenir le nom objet transféré par la page précédente
    this.NomObjet = this.navParams.get('Nom');
    this.response = '';
    this.search_par_nom();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchresultPage');
  }

  //Fonction pour récupérer les informations d'un produit dans un serveur 
  search_par_nom(){
    var link = 'http://tuxa.sme.utc/~na17a023/searchjson.php';
    var myData = JSON.stringify({ NomObjet: this.NomObjet});
    this.http.post(link, myData)
    .subscribe(data => {
      //Récupérer les informations
      this.response = data["_body"];
      //Transférer ces informations au format JSON
      this.response_traite = JSON.parse(this.response);
      //Saucegarder ces informations dans variables pour afficher
      this.Id = this.response_traite.id;
      this.Genre = this.response_traite.genre;
      this.Categorie = this.response_traite.categorie;
      this.Fournisseur = this.response_traite.fournisseur;
      this.Couleur = this.response_traite.couleur;
      this.Marque = this.response_traite.couleur;
      this.Matiere = this.response_traite.matiere;
      this.Etat = this.response_traite.etat;
      this.Prix = this.response_traite.prix;
      this.Quantite = this.response_traite.quantite;
      this.Vintage = this.response_traite.vintage;
      this.Description = this.response_traite.description;
      this.Poid = this.response_traite.poid;
      this.Statut = this.response_traite.statut;
      this.avatar1 = this.response_traite.photo1;
      this.avatar2 = this.response_traite.photo2;
      this.avatar3 = this.response_traite.photo3;
      this.avatar4 = this.response_traite.photo4;
      this.avatar5 = this.response_traite.photo5;
      this.avatar6 = this.response_traite.photo6;
    }, error => {
        console.log("Oooops!");
    });  
  }

  //Fonction pour valider un produit selon un nom donné
  valider(){
    var link = 'http://tuxa.sme.utc/~na17a023/valider.php';
    var myData = JSON.stringify({ id: this.Id});
    this.http.post(link, myData)
    .subscribe(data => {
      this.response = data["_body"];
      alert(this.response);
      this.search_par_nom();
    }, error => {
        console.log("Oooops!");
    });
  }

  //Foncrion pour archiver un produit selon un nom donné
  archiver(){
    var link = 'http://tuxa.sme.utc/~na17a023/archiver.php';
    var myData = JSON.stringify({ id: this.Id});
    this.http.post(link, myData)
    .subscribe(data => {
      this.response = data["_body"];
      alert(this.response);
      this.search_par_nom();
    }, error => {
        console.log("Oooops!");
    });
  }

  //Fonction pour aller à la page modifier
  change(){
    this.navCtrl.push(ModifierPage,{
      Nom: this.NomObjet});
  }

}
