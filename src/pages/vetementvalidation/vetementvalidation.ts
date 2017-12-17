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
  public avatar1;
  public avatar2;
  public avatar3;
  public avatar4;
  public avatar5;
  public avatar6;
  data:any = {};
  private toast: Toast
  
    myAppDatabase: SQLiteObject;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, public http: Http) {
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
    this.data.response = '';
    this.http = http;
    this.data.Genre=this.Genre;
    this.data.Categorie=this.Categorie;
    this.data.NomObjet=this.NomObjet;
    this.data.Couleur=this.Couleur;
    this.data.Marque=this.Marque;
    this.data.Matiere=this.Matiere;
    this.data.Etat=this.Etat;
    this.data.Prix=this.Prix;
    this.data.Quantite=this.Quantite;
    this.data.Vintage=this.Vintage;
    this.data.Description=this.Description;
    this.data.Poid=this.Poid;

    this.sqlite.create({
      name: 'EmmausTest.db',
      location: 'default'
    }).then((database: SQLiteObject) => {
      //database.executeSql('CREATE TABLE IF NOT EXISTS users(email VARCHAR(320) PRIMARY KEY, username VARCHAR(20) NOT NULL, password VARCHAR(30) NOT NULL, gender BOOLEAN, age TINYINT, intro VARCHAR(300), phone CHAR(11), location VARCHAR(100));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));
      //database.executeSql('CREATE TABLE IF NOT EXISTS objets(nom VARCHAR(320) PRIMARY KEY, categorie VARCHAR(20) NOT NULL, couleur VARCHAR(30) NOT NULL, genre varchar(30) NOT NULL, marque varchar(30) NOT NULL, matiere VARCHAR(300) NOT NULL, etat VARCHAR(30) NOT NULL, prix VARCHAR(30) NOT NULL, quantite INTEGER, vintage BOOLEAN, poid varchar(30) NOT NULL, description VARCHAR(1000)photo1 VARCHAR(255), photo2 VARCHAR(255), photo3 VARCHAR(255),photo4 VARCHAR(255), photo5 VARCHAR(255), photo6 VARCHAR(255));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));      
      //database.executeSql('CREATE TABLE IF NOT EXISTS produits(nom VARCHAR(320) PRIMARY KEY, categorie VARCHAR(20) NOT NULL, couleur VARCHAR(30) NOT NULL, genre varchar(30) NOT NULL, marque varchar(30) NOT NULL, matiere VARCHAR(300) NOT NULL, etat VARCHAR(30) NOT NULL, prix VARCHAR(30) NOT NULL, quantite INTEGER, vintage BOOLEAN, description VARCHAR(1000),  );', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));      
      this.myAppDatabase = database;
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidationVetementPage');
  }
  //ne plus utiliser
  valider(){
    this.myAppDatabase.executeSql('INSERT INTO objets VALUES (?, ?, ?,?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?);', [this.NomObjet, this.Categorie, this.Couleur,this.Genre,this.Marque,this.Matiere,this.Etat,this.Prix,this.Quantite,this.Vintage,this.Poid, this.Description, this.avatar1, this.avatar2, this.avatar3, this.avatar4, this.avatar5, this.avatar6]).then(() => console.log('insert into produits table successfully')).catch(e => console.log(e));
    alert("Ajoute succes");
    this.navCtrl.push(ChoixPage);
  }

  submit() {
    this.data.username = 'xxyzzy';
    var link = 'http://tuxa.sme.utc/~na17a023/testphp.php';
    var myData = JSON.stringify({
      username: this.data.username,
      NomObjet: this.data.NomObjet,
      Categorie:this.data.Categorie,
      Couleur:this.data.Couleur,
      Genre:this.data.Genre,
      Marque:this.data.Marque,
      Matiere:this.data.Matiere,
      Etat:this.data.Etat,
      Prix:this.data.Prix,
      Quantite:this.data.Quantite,
      Vintage:this.data.Vintage,
      Poid:this.data.Poid,
      Description:this.data.Description
    
    });
    
    this.http.post(link, myData)
    .subscribe(data => {
      alert("entre");
      this.data.response = data["_body"];
      alert(this.data.response);
    }, error => {
        console.log("Oooops!");
    });
    this.navCtrl.push(ChoixPage);
}


/*
  search(){
    this.myAppDatabase.executeSql('SELECT * FROM objets;',{}).then(res => {
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
*/

}
