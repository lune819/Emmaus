import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { Toast } from '@ionic-native/toast';
import {ChoixPage} from '../choix/choix';
import { Http } from '@angular/http';
/**
 * Generated class for the VetementvalidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vetementvalidation',
  templateUrl: 'vetementvalidation.html',
})
export class VetementvalidationPage {

  //valeurs qui vont être affichées et tranféré au serveur
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
  public result;
  public avatar1;
  public avatar2;
  public avatar3;
  public avatar4;
  public avatar5;
  public avatar6;
  public response;
  /*NE PLUS UTILISER
  POUR LA BASE DE DONNEES LOCAL
  private toast: Toast
  myAppDatabase: SQLiteObject;*/

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, public http: Http) {
    //récupérer les valeurs données par la page précédente
    this.Genre = this.navParams.get('Genre');
    this.Categorie = this.navParams.get('Categorie');
    this.NomObjet = this.navParams.get('NomObjet');
    this.Fournisseur = this.navParams.get('Fournisseur');
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

    this.http = http;
    this.response = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidationVetementPage');
  }

  //Fonction pour inserer les informations d'un produit au serveur
  submit() {
    var link = 'http://tuxa.sme.utc/~na17a023/insertvetement.php';
    var myData = JSON.stringify({
      NomObjet: this.NomObjet,
      Categorie:this.Categorie,
      Fournisseur:this.Fournisseur,
      Couleur:this.Couleur,
      Genre:this.Genre,
      Marque:this.Marque,
      Matiere:this.Matiere,
      Etat:this.Etat,
      Prix:this.Prix,
      Quantite:this.Quantite,
      Vintage:this.Vintage,
      Poid:this.Poid,
      Description:this.Description,
      Statut:'B',
      Photo1:this.avatar1,
      Photo2:this.avatar2,
      Photo3:this.avatar3,
      Photo4:this.avatar4,
      Photo5:this.avatar5,
      Photo6:this.avatar6,   
    });
    //Envoyer les informations du format JSON
    this.http.post(link, myData)
    .subscribe(data => {
      this.response = data["_body"];
      alert(this.response);
    }, error => {
        console.log("Oooops!");});
    //Aller à la page "Choix"
    this.navCtrl.push(ChoixPage);
  }

   /*NE PLUS UTILISER
  POUR LA BASE DE DONNEES LOCAL
  valider(){
    this.myAppDatabase.executeSql('INSERT INTO objets VALUES (?, ?, ?,?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?);', [this.NomObjet, this.Categorie, this.Couleur,this.Genre,this.Marque,this.Matiere,this.Etat,this.Prix,this.Quantite,this.Vintage,this.Poid, this.Description, this.avatar1, this.avatar2, this.avatar3, this.avatar4, this.avatar5, this.avatar6]).then(() => console.log('insert into produits table successfully')).catch(e => console.log(e));
    alert("Ajoute succes");
    this.navCtrl.push(ChoixPage);
  }*/

}
