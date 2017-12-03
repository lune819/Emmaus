import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { Toast } from '@ionic-native/toast';
import {ChoixPage} from '../choix/choix';

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
  public result;
  private toast: Toast
  
    myAppDatabase: SQLiteObject;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
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
    this.sqlite.create({
      name: 'EmmausTest.db',
      location: 'default'
    }).then((database: SQLiteObject) => {
      database.executeSql('CREATE TABLE IF NOT EXISTS users(email VARCHAR(320) PRIMARY KEY, username VARCHAR(20) NOT NULL, password VARCHAR(30) NOT NULL, gender BOOLEAN, age TINYINT, intro VARCHAR(300), phone CHAR(11), location VARCHAR(100));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));
      database.executeSql('CREATE TABLE IF NOT EXISTS objets(nom VARCHAR(320) PRIMARY KEY, categorie VARCHAR(20) NOT NULL, couleur VARCHAR(30) NOT NULL, genre varchar(30) NOT NULL, marque varchar(30) NOT NULL, matiere VARCHAR(300) NOT NULL, etat VARCHAR(30) NOT NULL, prix VARCHAR(30) NOT NULL, quantite INTEGER, vintage BOOLEAN, poid varchar(30) NOT NULL, description VARCHAR(1000));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));      
      this.myAppDatabase = database;
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidationVetementPage');
  }
  valider(){
    this.myAppDatabase.executeSql('INSERT INTO objets VALUES (?, ?, ?,?, ?, ?, ?, ?, ?,?,?,?);', [this.NomObjet, this.Categorie, this.Couleur,this.Genre,this.Marque,this.Matiere,this.Etat,this.Prix,this.Quantite,this.Vintage,this.Poid, this.Description]).then(() => console.log('insert into produits table successfully')).catch(e => console.log(e));
    alert("Ajoute succes");
    this.navCtrl.push(ChoixPage);
  }
  search(){
    this.myAppDatabase.executeSql('SELECT * FROM produits;',{}).then(res => {
      alert("jin le");  
      if(res.rows.length > 0) {
          alert("yesss");
          this.result = res.rows.item(3).nom;
          alert(this.result);
}

}).catch(e => {
console.log(e);
this.toast.show(e, '5000', 'center').subscribe(
  toast => {
    console.log(toast);
  }
);
});
  }

}
