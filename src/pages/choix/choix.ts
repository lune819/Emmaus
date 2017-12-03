import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InfogeneralPage} from '../infogeneral/infogeneral';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { Toast } from '@ionic-native/toast';
import {SearchresultPage} from '../searchresult/searchresult';

/**
 * Generated class for the ChoixPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choix',
  templateUrl: 'choix.html',
})
export class ChoixPage {
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
    this.sqlite.create({
      name: 'EmmausTest.db',
      location: 'default'
    }).then((database: SQLiteObject) => {
      database.executeSql('CREATE TABLE IF NOT EXISTS users(email VARCHAR(320) PRIMARY KEY, username VARCHAR(20) NOT NULL, password VARCHAR(30) NOT NULL, gender BOOLEAN, age TINYINT, intro VARCHAR(300), phone CHAR(11), location VARCHAR(100));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));
      database.executeSql('CREATE TABLE IF NOT EXISTS produits(nom VARCHAR(320) PRIMARY KEY, categorie VARCHAR(20) NOT NULL, couleur VARCHAR(30) NOT NULL, genre varchar(30) NOT NULL, marque varchar(30) NOT NULL, matiere VARCHAR(300) NOT NULL, etat VARCHAR(30) NOT NULL, prix VARCHAR(30) NOT NULL, quantite INTEGER, vintage BOOLEAN, description VARCHAR(1000));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));      
      this.myAppDatabase = database;
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoixPage');
  }

  goinfo(){
    this.navCtrl.push(InfogeneralPage);
  }
  search(produit_nom){
    this.myAppDatabase.executeSql('SELECT * FROM objets where nom=?;',[produit_nom]).then(res => {
      alert("jin le");  
      if(res.rows.length > 0) {
          alert("yesss");
          this.NomObjet = res.rows.item(0).nom;
          this.Categorie=res.rows.item(0).categorie;
          this.Couleur=res.rows.item(0).couleur;
          this.Description=res.rows.item(0).description;
          this.Etat=res.rows.item(0).etat;
          this.Genre=res.rows.item(0).genre;
          this.Marque=res.rows.item(0).marque;
          this.Matiere=res.rows.item(0).matiere;
          this.Prix=res.rows.item(0).prix;
          this.Quantite=res.rows.item(0).quantite;
          this.Vintage=res.rows.item(0).vintage;
          this.Poid=res.rows.item(0).poid;
          alert("find");
          alert(this.Categorie);
          this.navCtrl.push(SearchresultPage,{
            Genre: this.Genre,
            Matiere: this.Matiere,
            Marque: this.Marque,
            Couleur: this.Couleur,
            Poid: this.Poid,
            Description: this.Description,
            Etat: this.Etat,
            Vintage: this.Vintage,
            Prix: this.Prix,
            NomObjet: this.NomObjet,
            Categorie: this.Categorie,
            Nombre: this.Quantite
      });
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
