import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InfogeneralPage} from '../infogeneral/infogeneral';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { Toast } from '@ionic-native/toast';
import {SearchresultPage} from '../searchresult/searchresult';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
import {Camera, CameraOptions} from "@ionic-native/camera";

import { Http } from '@angular/http';

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
  public scannedText: string;
  public avatar1;
  public avatar2;
  public avatar3;
  public avatar4;
  public avatar5;
  public avatar6;
  private toast: Toast;
  data:any = {};
  
    myAppDatabase: SQLiteObject;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private sqlite: SQLite,
    public imagePicker: ImagePicker, 
    public camera: Camera,
    private barcodeScanner: BarcodeScanner
  ) {
    this.sqlite.create({
      name: 'EmmausTest.db',
      location: 'default'
    }).then((database: SQLiteObject) => {
      //database.executeSql('CREATE TABLE IF NOT EXISTS users(email VARCHAR(320) PRIMARY KEY, username VARCHAR(20) NOT NULL, password VARCHAR(30) NOT NULL, gender BOOLEAN, age TINYINT, intro VARCHAR(300), phone CHAR(11), location VARCHAR(100));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));
      //database.executeSql('CREATE TABLE IF NOT EXISTS produits(nom VARCHAR(320) PRIMARY KEY, categorie VARCHAR(20) NOT NULL, couleur VARCHAR(30) NOT NULL, genre varchar(30) NOT NULL, marque varchar(30) NOT NULL, matiere VARCHAR(300) NOT NULL, etat VARCHAR(30) NOT NULL, prix VARCHAR(30) NOT NULL, quantite INTEGER, vintage BOOLEAN, description VARCHAR(1000));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));      
      //database.executeSql('CREATE TABLE IF NOT EXISTS objets(nom VARCHAR(320) PRIMARY KEY, categorie VARCHAR(20) NOT NULL, couleur VARCHAR(30) NOT NULL, genre varchar(30) NOT NULL, marque varchar(30) NOT NULL, matiere VARCHAR(300) NOT NULL, etat VARCHAR(30) NOT NULL, prix VARCHAR(30) NOT NULL, quantite INTEGER, vintage BOOLEAN, poid varchar(30) NOT NULL, description VARCHAR(1000)photo1 VARCHAR(255), photo2 VARCHAR(255), photo3 VARCHAR(255),photo4 VARCHAR(255), photo5 VARCHAR(255), photo6 VARCHAR(255));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));      
      
      this.myAppDatabase = database;
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoixPage');
  }

  goinfo(){
    this.navCtrl.push(InfogeneralPage);
  }

  search_par_nom(produit_nom){  
    //alert("jin le");  
      if(produit_nom != null) {
          this.navCtrl.push(SearchresultPage,{
            NomObjet: produit_nom
      });
}
      else{
        alert("nom vide!");
      }
  }
  

  search(produit_nom){
    //modifier par jyq
    //this.myAppDatabase.executeSql('SELECT * FROM objets where nom LIKE \'%?%\';',[produit_nom]).then(res => {
      this.myAppDatabase.executeSql('SELECT * FROM objets where nom=?;',[produit_nom]).then(res => {
        
    //alert("jin le");  
      if(res.rows.length > 0) {
          //alert("yesss");
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
          this.avatar1=res.rows.item(0).photo1;
          this.avatar2=res.rows.item(0).photo2;
          this.avatar3=res.rows.item(0).photo3;
          this.avatar4=res.rows.item(0).photo4;
          this.avatar5=res.rows.item(0).photo5;
          this.avatar6=res.rows.item(0).photo6;
          alert("Produit find!");
          //alert(this.Categorie);
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
            Nombre: this.Quantite,
            Image1: this.avatar1,
            Image2: this.avatar2,
            Image3: this.avatar3,
            Image4: this.avatar4,
            Image5: this.avatar5,
            Image6: this.avatar6
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

  public scanQR() {
    
       this.barcodeScanner.scan().then((barcodeData) => {
         if (barcodeData.cancelled) {
           console.log("User cancelled the action!");
           return false;
         }
         console.log("Scanned successfully!");
         console.log(barcodeData);
         //alert(barcodeData);
         this.scannedText=JSON.stringify(barcodeData);
         alert("Résultat : "+this.scannedText);
       }, (err) => {
         console.log(err);
       });
     } 

}
