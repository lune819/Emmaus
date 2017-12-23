import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, AlertController} from 'ionic-angular';

import {VetementinfoPage} from '../vetementinfo/vetementinfo';

import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
import {Camera, CameraOptions} from "@ionic-native/camera";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ChoixPage } from '../choix/choix';
/**
 * Generated class for the ModifierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier',
  templateUrl: 'modifier.html',
})
export class ModifierPage {
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
  
  //Pour compter le nombre de photo
  public counter=1; 
  //Pour compter le nombre de produit
  public number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController, 
    public alertCtrl: AlertController, 
    public imagePicker: ImagePicker, 
    public camera: Camera,
    public http: Http) 
    {
      this.http = http;
      //Obtenir le nom objet transféré par la page précédente
      this.NomObjet = this.navParams.get('Nom');
      this.response = '';
      this.search_par_nom();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifierPage');
  }

  //Menu pour ajouter une photo
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: 'Prendre une photo',
        role: 'takePhoto',
        handler: () => {
          this.takePhoto();
        }
      }, {
        text: 'Importer sur album',
        role: 'chooseFromAlbum',
        handler: () => {
          this.chooseFromAlbum();
        }
      }, {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log("cancel");
        }
      }]
    });
    actionSheet.present().then(value => {
      return value;
    });
  }
  
  //Fonction pour prendre une photo
  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200,
      saveToPhotoAlbum: true,
      encodingType: this.camera.EncodingType.JPEG, 
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(image => {
      console.log('Image URI: ' + image);
      //Stocker la photo selon la valeur de compteur
      if(this.counter == 1){this.avatar1 = 'data:image/jpeg;base64,' + image;}
      if(this.counter == 2){this.avatar2 = 'data:image/jpeg;base64,' + image;}
      if(this.counter == 3){this.avatar3 = 'data:image/jpeg;base64,' + image;}
      if(this.counter == 4){this.avatar4 = 'data:image/jpeg;base64,' + image;}
      if(this.counter == 5){this.avatar5 = 'data:image/jpeg;base64,' + image;}
      if(this.counter == 6){this.avatar6 = 'data:image/jpeg;base64,' + image;}
      if(this.counter >= 6){alert("6 photos maximals !");}
      this.counter++;
    }, error => {
      console.log('Error: ' + error);
    });
  }

  //Importer une photo sur album
  chooseFromAlbum() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
      width: 200,
      height: 200,
      outputType:1
    };
    this.imagePicker.getPictures(options).then(images => {
      if (images.length + this.counter > 7) {
        this.presentAlert();
      }
        else{
        console.log('Image URI: ' + images[0]);
        for(let i = 0; i < images.length ; i++ ){
          //Stocker la photo selon la valeur de compteur
          if(i + this.counter == 1){this.avatar1 = 'data:image/jpeg;base64,' + images[i];}
          if(i + this.counter == 2){this.avatar2 = 'data:image/jpeg;base64,' + images[i];}
          if(i + this.counter == 3){this.avatar3 = 'data:image/jpeg;base64,' + images[i];}
          if(i + this.counter == 4){this.avatar4 = 'data:image/jpeg;base64,' + images[i];}
          if(i + this.counter == 5){this.avatar5 = 'data:image/jpeg;base64,' + images[i];}
          if(i + this.counter == 6){this.avatar6 = 'data:image/jpeg;base64,' + images[i];}
        }
        this.counter = this.counter + images.length;
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }

  //Supprimer tous les photos
  deletePhoto(){
    this.counter = 1;
    this.avatar1 = "";
    this.avatar2 = "";
    this.avatar3 = "";
    this.avatar4 = "";
    this.avatar5 = "";
    this.avatar6 = "";
  }

  //Alert pour ne pas dépasser 6 photos maximal
  presentAlert() {
    let alert = this.alertCtrl.create({title: "failed", message: "6 photos maximal!", buttons: ["confirmer"]});
    alert.present().then(value => {
      return value;
    });
  }

  //Fonction pour augmenter le nombre de produit
  increase(){
    this.number++;
  }
  //Fonction pour dimunier le nombre de produit
  decrease(){
    if(this.number>1)
    this.number--;
    else
    alert("Il faut que le nombre soit plus de 1!");
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
      this.number = this.response_traite.quantite;
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
      //calculer le nombre de photo retourné par le serveur
      if(this.avatar1 == ''){this.counter = 1;}
      else {if(this.avatar2 == ''){this.counter = 2;}
            else {if(this.avatar3 == ''){this.counter = 3;}
                  else {if(this.avatar4 == ''){this.counter = 4;}
                        else {if(this.avatar5 == ''){this.counter = 5;}
                              else {if (this.avatar6 == ''){this.counter = 6;}
                                    else this.counter = 7;
    }}}}}
    }, error => {
        console.log("Oooops!");
    });  
  }

  //Fonction pour mettre à jour les informations d'un produit
  submit() {
    var link = 'http://tuxa.sme.utc/~na17a023/update.php';
    var myData = JSON.stringify({
      Id: this.Id,
      NomObjet: this.NomObjet,
      Categorie:this.Categorie,
      Fournisseur:this.Fournisseur,
      Couleur:this.Couleur,
      Genre:this.Genre,
      Marque:this.Marque,
      Matiere:this.Matiere,
      Etat:this.Etat,
      Prix:this.Prix,
      Quantite:this.number,
      Vintage:this.Vintage,
      Poid:this.Poid,
      Description:this.Description,
      Statut:this.Statut,
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
        console.log("Oooops!");
    });
    //Aller à la page "Choix"
    this.navCtrl.push(ChoixPage,{
      Nom: this.NomObjet});
  }

}
