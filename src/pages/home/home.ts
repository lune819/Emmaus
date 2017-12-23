import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { Toast } from '@ionic-native/toast';
import {ChoixPage} from '../choix/choix';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  /*POUR BASE DE DONNEES LOCAL
  //NE PLUS UTILISER
  username: string;
  password: string;
  gender: boolean;
  age: number;
  intro: string;
  email: string;
  phone: string;
  location: string;
  public result;
  public test;
  public test1;
  private toast: Toast
  myAppDatabase: SQLiteObject;*/
  
  public response;

  constructor(public navCtrl: NavController, private sqlite: SQLite, public http: Http) {
    this.http = http;
    this.response='';
    /*NE PLUS UTILISER
    POUR LA BASE DE DONNEES LOCAL
    this.username = "admin";
    this.password= "admin";
    this.gender = true;
    this.age = 22;
    this.intro = "intro";
    this.email = "jyq@666.com";
    this.phone = "18302199093";
    this.location = "default";*/
  }

  /*POUR TESTER
  goChoix(){
    this.navCtrl.push(ChoixPage);
  }*/

  //Fonction de login
  authen(login,mdp){
    if(login==null||login=="")
        alert("Veuillez saisir votre identifiant!");
    else if(mdp==null||mdp=="")
        alert("Veuillez saisir votre mot de passe!");
    else{
      var link = 'http://tuxa.sme.utc/~na17a023/login.php';
      var myData = JSON.stringify({ Login: login});
      this.http.post(link, myData)
      .subscribe(data => {
        this.response = data["_body"];
        if(this.response==mdp)
          this.navCtrl.push(ChoixPage);
        else
          alert ("Identifiant ou mot de passe incorrct!");
      }, error => {
          console.log("Oooops!");
      });  
    }
    
  }
/*NE PLUS UTILISER
    POUR LA BASE DE DONNEES LOCAL
  initDatabase() {
    this.sqlite.create({
      name: 'EmmausTest.db',
      location: 'default'
    }).then((database: SQLiteObject) => {
      database.executeSql('DROP TABLE IF EXISTS objets;', {}).then(() => console.log('delete successfully table produits')).catch(e => console.log(e));
      database.executeSql('CREATE TABLE IF NOT EXISTS users(email VARCHAR(320) PRIMARY KEY, username VARCHAR(20) NOT NULL, password VARCHAR(30) NOT NULL, gender BOOLEAN, age TINYINT, intro VARCHAR(300), phone CHAR(11), location VARCHAR(100));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));
      database.executeSql('CREATE TABLE IF NOT EXISTS objets(nom VARCHAR(320) PRIMARY KEY, categorie VARCHAR(20) NOT NULL, couleur VARCHAR(30) NOT NULL, genre varchar(30) NOT NULL, marque varchar(30) NOT NULL, matiere VARCHAR(300) NOT NULL, etat VARCHAR(30) NOT NULL, prix VARCHAR(30) NOT NULL, quantite INTEGER, vintage BOOLEAN, poid varchar(30) NOT NULL, description VARCHAR(1000), photo1 VARCHAR(255), photo2 VARCHAR(255), photo3 VARCHAR(255),photo4 VARCHAR(255), photo5 VARCHAR(255), photo6 VARCHAR(255));', {}).then(() => console.log('init database successfully')).catch(e => console.log(e));      
      this.myAppDatabase = database;
      this.myAppDatabase.executeSql('INSERT INTO users VALUES (?, ?, ?, NULL, NULL, NULL, NULL, NULL);', [this.email, this.username, this.password]).then(() => console.log('insert into users table successfully')).catch(e => console.log(e));
      
    })
  }
  insertIntoUserTable() {
    this.myAppDatabase.executeSql('INSERT INTO users VALUES (?, ?, ?, NULL, NULL, NULL, NULL, NULL);', [this.email, this.username, this.password]).then(() => console.log('insert into users table successfully')).catch(e => console.log(e));
  }
  queryUserTable() {
    this.result=this.myAppDatabase.executeSql('SELECT age FROM users;', {}).then(() => console.log('query users table successfully')).catch(e => console.log(e));
    alert(this.result);
  }
  updateUserTable() {
    this.myAppDatabase.executeSql('UPDATE users SET username=?, password=?, gender=?, age=?, intro=?, phone=?, location=? WHERE email=?;', [this.username, this.password, this.gender, this.age, this.intro, this.phone, this.location, this.email]).then(() => console.log('update users table successfully')).catch(e => console.log(e));
    
  }
  newfonc(login){
      this.myAppDatabase.executeSql('SELECT * FROM users where username=?',[login]).then(res => {
        if(res.rows.length > 0) {
            this.test1 = res.rows.item(0).password;
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
  goChoix(login,mdp){
    this.newfonc(login);
    if(this.test1==mdp){
    this.navCtrl.push(ChoixPage);
      }
}*/
}
