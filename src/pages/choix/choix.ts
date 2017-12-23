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
  /*POUR BASE DE DONNEES LOCAL
  //NE PLUS UTILISER
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
  private toast: Toast;
  data:any = {};
  myAppDatabase: SQLiteObject;*/

  public scannedText: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public imagePicker: ImagePicker, 
    public camera: Camera,
    private barcodeScanner: BarcodeScanner,
    //private sqlite: SQLite,
  ) {
    /*POUR BASE DE DONNEES LOCAL
      NE PLUS UTILISER
    this.sqlite.create({
      name: 'EmmausTest.db',
      location: 'default'
    }).then((database: SQLiteObject) => { this.myAppDatabase = database; })
    */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoixPage');
  }

  //ALLER à la page infogeneral pour entrer un nouveau objet
  goinfo(){
    this.navCtrl.push(InfogeneralPage);
  }

  //Aller à la page searchresult 
  //nom de produit est transféré comme un paramètre
  search_par_nom(produit_nom){   
      if(produit_nom != null || produit_nom =="") {
          this.navCtrl.push(SearchresultPage,{
            Nom: produit_nom});
      }
      else{
        alert("nom vide!");
      }
  }
  
  //Fonction pour scanner un code barre ou QR code
  scanQR() {
       this.barcodeScanner.scan().then((barcodeData) => {
         if (barcodeData.cancelled) {
           console.log("User cancelled the action!");
           return false;
         }
         console.log("Scanned successfully!");
         console.log(barcodeData);
         this.scannedText=JSON.stringify(barcodeData);
         alert("Résultat : "+this.scannedText);
       }, (err) => {
         console.log(err);
       });
     }

/*POUR BASE DE DONNEES LOCAL
  NE PLUS UTILISER
  search(produit_nom){
    this.myAppDatabase.executeSql('SELECT * FROM objets where nom=?;',[produit_nom]).then(res => {
      if(res.rows.length > 0) {
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
    }).catch(e => { console.log(e);
                    this.toast.show(e, '5000', 'center').subscribe(toast => {console.log(toast);});});
  }*/
 

}
