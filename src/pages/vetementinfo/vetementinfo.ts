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

  public NomObjet;
  public number=1;
  public Categorie;
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
    this.NomObjet = this.navParams.get('Nom');
    this.Categorie = this.navParams.get('Categorie');
    this.avatar1 = this.navParams.get('Image1');
    this.avatar2 = this.navParams.get('Image2');
    this.avatar3 = this.navParams.get('Image3');
    this.avatar4 = this.navParams.get('Image4');
    this.avatar5 = this.navParams.get('Image5');
    this.avatar6 = this.navParams.get('Image6');
  }
  
  public fois=1;
  ionViewDidLoad() {
    console.log('ionViewDidLoad VetementInfo_1Page');
  }
  increase(){
    this.number++;
  }
  decrease(){
    if(this.number>1)
    this.number--;
    else
    alert("Il faut que le nombre soit plus de 1!");
  }
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
