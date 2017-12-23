import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{VetementvalidationPage} from '../vetementvalidation/vetementvalidation';



/**
 * Generated class for the VetementinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vetementinfo',
  templateUrl: 'vetementinfo.html',
})
export class VetementinfoPage {
  
  public number;
  //variables pour la page précédente
  public NomObjet;
  public Categorie;
  public Fournisseur;
  public avatar1;
  public avatar2;
  public avatar3;
  public avatar4;
  public avatar5;
  public avatar6;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams
  ) {
    //Sauvegarder les informations qui viennent de la page précédente
    this.NomObjet = this.navParams.get('Nom');
    this.Categorie = this.navParams.get('Categorie');
    this.Fournisseur = this.navParams.get('Founisseur');
    this.avatar1 = this.navParams.get('Image1');
    this.avatar2 = this.navParams.get('Image2');
    this.avatar3 = this.navParams.get('Image3');
    this.avatar4 = this.navParams.get('Image4');
    this.avatar5 = this.navParams.get('Image5');
    this.avatar6 = this.navParams.get('Image6');
    //Initialisation du nombre du produit
    this.number=1;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VetementInfo_1Page');
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

  //fonction qui permet de passer les valeurs à la page suivante
  suivant(vetement_genre,Matiere_Vetement,Marque_Vetement,Couleur_Vetement,Poid_Vetement,vetement_Description,vetement_Etat,vetement_vintage,vetement_prix){
    this.navCtrl.push(VetementvalidationPage,{
      Genre: vetement_genre,
      Matiere: Matiere_Vetement,
      Marque: Marque_Vetement,
      Couleur: Couleur_Vetement,
      Poid: Poid_Vetement,
      Description: vetement_Description,
      Etat: vetement_Etat,
      Vintage: vetement_vintage,
      Prix: vetement_prix,
      NomObjet: this.NomObjet,
      Categorie: this.Categorie,
      Fournisseur: this.Fournisseur,
      Nombre: this.number,
      Image1: this.avatar1,
      Image2: this.avatar2,
      Image3: this.avatar3,
      Image4: this.avatar4,
      Image5: this.avatar5,
      Image6: this.avatar6
    });
  }

}
