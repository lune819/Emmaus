webpackJsonp([6],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfogeneralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vetementinfo_vetementinfo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the InfogeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfogeneralPage = (function () {
    function InfogeneralPage(navCtrl, navParams, actionSheetCtrl, alertCtrl, imagePicker, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        //Variables pour stocker les 6 photos
        this.avatar1 = "";
        this.avatar2 = "";
        this.avatar3 = "";
        this.avatar4 = "";
        this.avatar5 = "";
        this.avatar6 = "";
        //Variable pour compter le nombre de photo
        this.counter = 1;
    }
    InfogeneralPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfogeneralPage');
    };
    //Pour aller à la page suivante
    InfogeneralPage.prototype.change = function (c, nom, fourni) {
        if (c == 'Vetement-femme' || c == 'Vetement-homme') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__vetementinfo_vetementinfo__["a" /* VetementinfoPage */], {
                Nom: nom,
                Categorie: c,
                Founisseur: fourni,
                Image1: this.avatar1,
                Image2: this.avatar2,
                Image3: this.avatar3,
                Image4: this.avatar4,
                Image5: this.avatar5,
                Image6: this.avatar6
            });
        }
    };
    //Menu pour ajouter une photo
    InfogeneralPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: 'Prendre une photo',
                    role: 'takePhoto',
                    handler: function () {
                        _this.takePhoto();
                    }
                }, {
                    text: 'Importer sur album',
                    role: 'chooseFromAlbum',
                    handler: function () {
                        _this.chooseFromAlbum();
                    }
                }, {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancel");
                    }
                }]
        });
        actionSheet.present().then(function (value) {
            return value;
        });
    };
    //Fonction pour prendre une photo
    InfogeneralPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 200,
            targetHeight: 200,
            saveToPhotoAlbum: true,
            encodingType: this.camera.EncodingType.JPEG,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (image) {
            console.log('Image URI: ' + image);
            //Stocker la photo selon la valeur de compteur
            if (_this.counter == 1) {
                _this.avatar1 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter == 2) {
                _this.avatar2 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter == 3) {
                _this.avatar3 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter == 4) {
                _this.avatar4 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter == 5) {
                _this.avatar5 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter == 6) {
                _this.avatar6 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter >= 6) {
                alert("6 photos maximals !");
            }
            _this.counter++;
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    //Importer une photo sur album
    InfogeneralPage.prototype.chooseFromAlbum = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            width: 200,
            height: 200,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (images) {
            if (images.length + _this.counter > 7) {
                _this.presentAlert();
            }
            else {
                console.log('Image URI: ' + images[0]);
                for (var i = 0; i < images.length; i++) {
                    //Stocker la photo selon la valeur de compteur
                    if (i + _this.counter == 1) {
                        _this.avatar1 = 'data:image/jpeg;base64,' + images[i];
                    }
                    if (i + _this.counter == 2) {
                        _this.avatar2 = 'data:image/jpeg;base64,' + images[i];
                    }
                    if (i + _this.counter == 3) {
                        _this.avatar3 = 'data:image/jpeg;base64,' + images[i];
                    }
                    if (i + _this.counter == 4) {
                        _this.avatar4 = 'data:image/jpeg;base64,' + images[i];
                    }
                    if (i + _this.counter == 5) {
                        _this.avatar5 = 'data:image/jpeg;base64,' + images[i];
                    }
                    if (i + _this.counter == 6) {
                        _this.avatar6 = 'data:image/jpeg;base64,' + images[i];
                    }
                }
                _this.counter = _this.counter + images.length;
            }
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    //Supprimer tous les photos 
    InfogeneralPage.prototype.deletePhoto = function () {
        this.counter = 1;
        this.avatar1 = "";
        this.avatar2 = "";
        this.avatar3 = "";
        this.avatar4 = "";
        this.avatar5 = "";
        this.avatar6 = "";
    };
    //Alert pour ne pas dépasser 6 photos maximal
    InfogeneralPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({ title: "failed", message: "6 photos maximal!", buttons: ["confirmer"] });
        alert.present().then(function (value) {
            return value;
        });
    };
    InfogeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infogeneral',template:/*ion-inline-start:"/Users/apple/Desktop/Emmaus/src/pages/infogeneral/infogeneral.html"*/'<!--\n  Generated template for the InfogeneralPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="color">\n    <ion-title class="color">infogeneral</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="list">\n      <div class="item item-input item-select">\n        <div class="input-label">\n          Categorie d\'objet\n        </div>\n        <select [(ngModel)]="categorie" style="width:150px" name="categorie" id="categorie" >\n          <optgroup label="Movilier-Deco" >\n            <option value="1">Gros mobilier</option>\n            <option selected="" value="2">Petit mobilier</option>\n            <option>Canape, Fauteuils et chaises</option>\n            <option>Tables et bureaux</option>\n            <option>Linge de maison</option>\n            <option>Objets deco et vaisselle</option>\n            <option>Mobilier professionnel</option>\n          </optgroup>\n          <optgroup label="Mode">\n            <option value=\'Vetement-femme\'>Vetement femme</option>\n            <option value=\'Vetement-homme\'>Vetement homme</option>\n          </optgroup>\n        </select>\n      </div>\n      <br/>\n  </div>\n  <div class="list">\n      \n        <div class="item item-input item-select">\n          <div class="input-label">\n            Categorie de Fournisseur\n          </div>\n          <select [(ngModel)]="fourni" style="width:150px" name="fourni" id="fourni" >\n              <option value=\'Fournisseur1\'>Fournisseur1</option>\n              <option value=\'Fournisseur2\'>Fournisseur2</option>\n          </select>\n        </div>\n        <br/>\n    </div>\n    <div class="content has-header">\n        <p>Nom d\'objet*</p>\n        <div class="list">\n          <label class="item item-input">\n            <input type="text" placeholder="" [(ngModel)]="Nom">\n          </label>\n        </div>\n    </div>\n    <br/>\n      <button ion-button color="light" (click)="presentActionSheet()">Photo+<ion-icon md="md-add-circle"></ion-icon></button>\n      <button ion-button color="light" (click)="deletePhoto()">Remove<ion-icon name=\'close\'></ion-icon></button>\n      <br/>\n      <div class="div">\n          <ion-img class="header-image" src={{avatar1}}></ion-img>\n          <ion-img class="header-image" src={{avatar2}}></ion-img>\n          <ion-img class="header-image" src={{avatar3}}></ion-img>\n      </div>\n      <div class="div">\n          <ion-img class="header-image" src={{avatar4}}></ion-img>\n          <ion-img class="header-image" src={{avatar5}}></ion-img>\n          <ion-img class="header-image" src={{avatar6}}></ion-img>\n      </div>\n      <button ion-button color="light" icon-end full (click)="change(categorie,Nom,fourni)">\n          Suivant<ion-icon name=\'arrow-forward\'></ion-icon>\n      </button>\n      <br/>\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Desktop/Emmaus/src/pages/infogeneral/infogeneral.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], InfogeneralPage);
    return InfogeneralPage;
}());

//# sourceMappingURL=infogeneral.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VetementinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vetementvalidation_vetementvalidation__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VetementinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VetementinfoPage = (function () {
    function VetementinfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
        this.number = 1;
    }
    VetementinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VetementInfo_1Page');
    };
    //Fonction pour augmenter le nombre de produit
    VetementinfoPage.prototype.increase = function () {
        this.number++;
    };
    //Fonction pour dimunier le nombre de produit
    VetementinfoPage.prototype.decrease = function () {
        if (this.number > 1)
            this.number--;
        else
            alert("Il faut que le nombre soit plus de 1!");
    };
    //fonction qui permet de passer les valeurs à la page suivante
    VetementinfoPage.prototype.suivant = function (vetement_genre, Matiere_Vetement, Marque_Vetement, Couleur_Vetement, Poid_Vetement, vetement_Description, vetement_Etat, vetement_vintage, vetement_prix) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__vetementvalidation_vetementvalidation__["a" /* VetementvalidationPage */], {
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
    };
    VetementinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vetementinfo',template:/*ion-inline-start:"/Users/apple/Desktop/Emmaus/src/pages/vetementinfo/vetementinfo.html"*/'<!--\n  Generated template for the VetementinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="color">\n    <ion-title class="color">vetementinfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="item item-input item-select">\n    <div class="input-label">\n      Genre de vetement\n    </div>\n    <select [(ngModel)]="vetement_genre" style="width:150px" name="vetement_genre" id="vetement_genre" >\n      <optgroup label="Genre" >\n        <option selected="" value="Homme">Homme</option>\n        <option value="Femme">Femme</option>\n        <option value="Garcon">Garcon</option>\n        <option value="Fille">Fille</option>\n      </optgroup>\n    </select>\n  </div>\n  <div class="content has-header">\n    <p >Matiere</p>\n    <div class="list">\n      <label class="item item-input">\n        <input type="text" placeholder="" [(ngModel)]="Matiere_Vetement">\n      </label>\n    </div>\n  </div>\n  <div class="content has-header">\n    <p>Marque</p>\n    <div class="list">\n      <label class="item item-input">\n       <input type="text" placeholder="" [(ngModel)]="Marque_Vetement">\n      </label>\n    </div>\n  </div>\n  <div class="content has-header">\n    <p>Couleur</p>\n    <div class="list">\n      <label class="item item-input">\n        <input type="text" placeholder="" [(ngModel)]="Couleur_Vetement">\n      </label>\n    </div>\n  </div>\n  <div class="content has-header">\n    <p>Poid (Kg)</p>\n    <div class="list">\n      <label class="item item-input">\n        <input type="text" placeholder="" [(ngModel)]="Poid_Vetement">\n      </label>\n    </div>\n  </div>\n  <div class="content has-header">\n    <p>Description</p>\n    <div class="list">\n      <label class="item item-input">\n        <textarea rows="3" cols="20" placeholder="Description jusqu\'a 2000 caractere" [(ngModel)]="vetement_Description"> </textarea>\n      </label>\n    </div>\n  </div>\n  <div class="item item-input item-select">\n    <div class="input-label">\n      Etat\n    </div>\n    <select [(ngModel)]="vetement_Etat" style="width:150px" name="vetement_etat" id="vetement_etat" >\n      <optgroup label="Etat" >\n        <option value="Bien">Bien</option>\n        <option value="Moyen">Moyen</option>\n        <option value="Mal">Mal</option>\n      </optgroup>\n    </select>\n  </div> \n  <div class="list">\n    <div class="item item-divider"> \n      VINTAGE\n    </div>\n    <label class="toggle toggle-assertive">\n      <input type="checkbox" [(ngModel)]="vetement_vintage">\n      <div class="track">\n        <div class="handle"></div>\n      </div>\n    </label>\n  </div>\n  <div class="content has-header">\n    <p >Prix</p>\n    <div class="list">\n      <label class="item item-input">\n        <input type="text" placeholder="" [(ngModel)]="vetement_prix">\n      </label>\n    </div>\n  </div>\n  Nombre :\n  <button ion-button color="light" (click)="decrease()">-</button>\n  {{number}}\n  <button ion-button color="light" (click)="increase()">+</button>\n  <br/>\n  <button ion-button color="light" (click)="suivant(vetement_genre,Matiere_Vetement,Marque_Vetement,Couleur_Vetement,Poid_Vetement,vetement_Description,vetement_Etat,vetement_vintage,vetement_prix)">Suivant</button>\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Desktop/Emmaus/src/pages/vetementinfo/vetementinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VetementinfoPage);
    return VetementinfoPage;
}());

//# sourceMappingURL=vetementinfo.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VetementvalidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choix_choix__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VetementvalidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VetementvalidationPage = (function () {
    /*NE PLUS UTILISER
    POUR LA BASE DE DONNEES LOCAL
    private toast: Toast
    myAppDatabase: SQLiteObject;*/
    function VetementvalidationPage(navCtrl, navParams, sqlite, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.http = http;
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
    VetementvalidationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ValidationVetementPage');
    };
    //Fonction pour inserer les informations d'un produit au serveur
    VetementvalidationPage.prototype.submit = function () {
        var _this = this;
        var link = 'http://tuxa.sme.utc/~na17a023/insertvetement.php';
        var myData = JSON.stringify({
            NomObjet: this.NomObjet,
            Categorie: this.Categorie,
            Fournisseur: this.Fournisseur,
            Couleur: this.Couleur,
            Genre: this.Genre,
            Marque: this.Marque,
            Matiere: this.Matiere,
            Etat: this.Etat,
            Prix: this.Prix,
            Quantite: this.Quantite,
            Vintage: this.Vintage,
            Poid: this.Poid,
            Description: this.Description,
            Statut: 'B',
            Photo1: this.avatar1,
            Photo2: this.avatar2,
            Photo3: this.avatar3,
            Photo4: this.avatar4,
            Photo5: this.avatar5,
            Photo6: this.avatar6,
        });
        //Envoyer les informations du format JSON
        this.http.post(link, myData)
            .subscribe(function (data) {
            _this.response = data["_body"];
            alert(_this.response);
        }, function (error) {
            console.log("Oooops!");
        });
        //Aller à la page "Choix"
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choix_choix__["a" /* ChoixPage */]);
    };
    VetementvalidationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vetementvalidation',template:/*ion-inline-start:"/Users/apple/Desktop/Emmaus/src/pages/vetementvalidation/vetementvalidation.html"*/'<!--\n  Generated template for the VetementvalidationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="color">\n    <ion-title class="color">vetementvalidation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h4>PRODUIT</h4>\n  Nom d\'objet: {{NomObjet}}\n  <br/>\n  Categorie: {{Categorie}}\n  <br/>\n  Fournisseur: {{Fournisseur}}\n  <br/>\n  <h4>CARACTERISTIC</h4>\n  Couleur: {{Couleur}}\n  <br/>\n  Genre: {{Genre}}\n  <br/>\n  Marque: {{Marque}}\n  <br/>\n  Matiere: {{Matiere}}\n  <br/>\n  Etat: {{Etat}}\n  <br/>\n  Prix: {{Prix}}\n  <br/>\n  Poid: {{Poid}}\n  <br/>\n  Quantite: {{Quantite}}\n  <br/>\n  Vintage: {{Vintage}}\n  <br/>\n  Description: {{Description}}\n  <br/>\n  <div class="div">\n      <ion-img class="header-image" src={{avatar1}}></ion-img>\n      <ion-img class="header-image" src={{avatar2}}></ion-img>\n      <ion-img class="header-image" src={{avatar3}}></ion-img>\n  </div>\n  <div class="div">\n      <ion-img class="header-image" src={{avatar4}}></ion-img>\n      <ion-img class="header-image" src={{avatar5}}></ion-img>\n      <ion-img class="header-image" src={{avatar6}}></ion-img>\n  </div>\n  <br/>\n  <button ion-button color="light" full (click)="submit()">Enregistrer</button>\n  <br/>\n  <br/>\n\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Desktop/Emmaus/src/pages/vetementvalidation/vetementvalidation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], VetementvalidationPage);
    return VetementvalidationPage;
}());

//# sourceMappingURL=vetementvalidation.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modifier_modifier__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SearchresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchresultPage = (function () {
    function SearchresultPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.data = {};
        this.http = http;
        //Obtenir le nom objet transféré par la page précédente
        this.NomObjet = this.navParams.get('Nom');
        this.response = '';
        this.search_par_nom();
    }
    SearchresultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchresultPage');
    };
    //Fonction pour récupérer les informations d'un produit dans un serveur 
    SearchresultPage.prototype.search_par_nom = function () {
        var _this = this;
        var link = 'http://tuxa.sme.utc/~na17a023/searchjson.php';
        var myData = JSON.stringify({ NomObjet: this.NomObjet });
        this.http.post(link, myData)
            .subscribe(function (data) {
            //Récupérer les informations
            _this.response = data["_body"];
            //Transférer ces informations au format JSON
            _this.response_traite = JSON.parse(_this.response);
            //Saucegarder ces informations dans variables pour afficher
            _this.Id = _this.response_traite.id;
            _this.Genre = _this.response_traite.genre;
            _this.Categorie = _this.response_traite.categorie;
            _this.Fournisseur = _this.response_traite.fournisseur;
            _this.Couleur = _this.response_traite.couleur;
            _this.Marque = _this.response_traite.couleur;
            _this.Matiere = _this.response_traite.matiere;
            _this.Etat = _this.response_traite.etat;
            _this.Prix = _this.response_traite.prix;
            _this.Quantite = _this.response_traite.quantite;
            _this.Vintage = _this.response_traite.vintage;
            _this.Description = _this.response_traite.description;
            _this.Poid = _this.response_traite.poid;
            _this.Statut = _this.response_traite.statut;
            _this.avatar1 = _this.response_traite.photo1;
            _this.avatar2 = _this.response_traite.photo2;
            _this.avatar3 = _this.response_traite.photo3;
            _this.avatar4 = _this.response_traite.photo4;
            _this.avatar5 = _this.response_traite.photo5;
            _this.avatar6 = _this.response_traite.photo6;
        }, function (error) {
            console.log("Oooops!");
        });
    };
    //Fonction pour valider un produit selon un nom donné
    SearchresultPage.prototype.valider = function () {
        var _this = this;
        var link = 'http://tuxa.sme.utc/~na17a023/valider.php';
        var myData = JSON.stringify({ id: this.Id });
        this.http.post(link, myData)
            .subscribe(function (data) {
            _this.response = data["_body"];
            alert(_this.response);
            _this.search_par_nom();
        }, function (error) {
            console.log("Oooops!");
        });
    };
    //Foncrion pour archiver un produit selon un nom donné
    SearchresultPage.prototype.archiver = function () {
        var _this = this;
        var link = 'http://tuxa.sme.utc/~na17a023/archiver.php';
        var myData = JSON.stringify({ id: this.Id });
        this.http.post(link, myData)
            .subscribe(function (data) {
            _this.response = data["_body"];
            alert(_this.response);
            _this.search_par_nom();
        }, function (error) {
            console.log("Oooops!");
        });
    };
    //Fonction pour aller à la page modifier
    SearchresultPage.prototype.change = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modifier_modifier__["a" /* ModifierPage */], {
            Nom: this.NomObjet
        });
    };
    SearchresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-searchresult',template:/*ion-inline-start:"/Users/apple/Desktop/Emmaus/src/pages/searchresult/searchresult.html"*/'<!--\n  Generated template for the SearchresultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="color">\n    <ion-title class="color">searchresult</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-button color="light" (click)="valider()">Valider</button>\n    <button ion-button color="light" (click)="archiver()">Archiver</button>\n    <button ion-button color="light" (click)="change()">Modifier</button>\n    \n  <h4>PRODUIT</h4>\n  ID: {{Id}}  \n  <br/>\n  Statut: {{Statut}}\n  <br/>\n  Nom d\'objet: {{NomObjet}}\n  <br/>\n  Categorie: {{Categorie}}\n  <br/>\n  Fournisseur: {{Fournisseur}}\n  <br/>\n  <h4>CARACTERISTIC</h4>\n  Couleur: {{Couleur}}\n  <br/>\n  Genre: {{Genre}}\n  <br/>\n  Marque: {{Marque}}\n  <br/>\n  Matiere: {{Matiere}}\n  <br/>\n  Etat: {{Etat}}\n  <br/>\n  Prix: {{Prix}}\n  <br/>\n  Poid: {{Poid}}\n  <br/>\n  Quantite: {{Quantite}}\n  <br/>\n  Vintage: {{Vintage}}\n  <br/>\n  Description: {{Description}}\n  <br/>\n  <div class="div">\n      <ion-img class="header-image" src={{avatar1}}></ion-img>\n      <ion-img class="header-image" src={{avatar2}}></ion-img>\n      <ion-img class="header-image" src={{avatar3}}></ion-img>\n  </div>\n  <div class="div">\n      <ion-img class="header-image" src={{avatar4}}></ion-img>\n      <ion-img class="header-image" src={{avatar5}}></ion-img>\n      <ion-img class="header-image" src={{avatar6}}></ion-img>\n  </div>\n  <br/>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Desktop/Emmaus/src/pages/searchresult/searchresult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], SearchresultPage);
    return SearchresultPage;
}());

//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choix_choix__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ModifierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifierPage = (function () {
    function ModifierPage(navCtrl, navParams, actionSheetCtrl, alertCtrl, imagePicker, camera, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.http = http;
        this.data = {};
        //Pour compter le nombre de photo
        this.counter = 1;
        this.http = http;
        //Obtenir le nom objet transféré par la page précédente
        this.NomObjet = this.navParams.get('Nom');
        this.response = '';
        this.search_par_nom();
    }
    ModifierPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifierPage');
    };
    //Menu pour ajouter une photo
    ModifierPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: 'Prendre une photo',
                    role: 'takePhoto',
                    handler: function () {
                        _this.takePhoto();
                    }
                }, {
                    text: 'Importer sur album',
                    role: 'chooseFromAlbum',
                    handler: function () {
                        _this.chooseFromAlbum();
                    }
                }, {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log("cancel");
                    }
                }]
        });
        actionSheet.present().then(function (value) {
            return value;
        });
    };
    //Fonction pour prendre une photo
    ModifierPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            allowEdit: true,
            targetWidth: 200,
            targetHeight: 200,
            saveToPhotoAlbum: true,
            encodingType: this.camera.EncodingType.JPEG,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (image) {
            console.log('Image URI: ' + image);
            //Stocker la photo selon la valeur de compteur
            if (_this.counter == 1) {
                _this.avatar1 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter == 2) {
                _this.avatar2 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter == 3) {
                _this.avatar3 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter == 4) {
                _this.avatar4 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter == 5) {
                _this.avatar5 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter == 6) {
                _this.avatar6 = 'data:image/jpeg;base64,' + image;
            }
            if (_this.counter >= 6) {
                alert("6 photos maximals !");
            }
            _this.counter++;
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    //Importer une photo sur album
    ModifierPage.prototype.chooseFromAlbum = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            width: 200,
            height: 200,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (images) {
            if (images.length + _this.counter > 7) {
                _this.presentAlert();
            }
            else {
                console.log('Image URI: ' + images[0]);
                for (var i = 0; i < images.length; i++) {
                    //Stocker la photo selon la valeur de compteur
                    if (i + _this.counter == 1) {
                        _this.avatar1 = 'data:image/jpeg;base64,' + images[i];
                    }
                    if (i + _this.counter == 2) {
                        _this.avatar2 = 'data:image/jpeg;base64,' + images[i];
                    }
                    if (i + _this.counter == 3) {
                        _this.avatar3 = 'data:image/jpeg;base64,' + images[i];
                    }
                    if (i + _this.counter == 4) {
                        _this.avatar4 = 'data:image/jpeg;base64,' + images[i];
                    }
                    if (i + _this.counter == 5) {
                        _this.avatar5 = 'data:image/jpeg;base64,' + images[i];
                    }
                    if (i + _this.counter == 6) {
                        _this.avatar6 = 'data:image/jpeg;base64,' + images[i];
                    }
                }
                _this.counter = _this.counter + images.length;
            }
        }, function (error) {
            console.log('Error: ' + error);
        });
    };
    //Supprimer tous les photos
    ModifierPage.prototype.deletePhoto = function () {
        this.counter = 1;
        this.avatar1 = "";
        this.avatar2 = "";
        this.avatar3 = "";
        this.avatar4 = "";
        this.avatar5 = "";
        this.avatar6 = "";
    };
    //Alert pour ne pas dépasser 6 photos maximal
    ModifierPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({ title: "failed", message: "6 photos maximal!", buttons: ["confirmer"] });
        alert.present().then(function (value) {
            return value;
        });
    };
    //Fonction pour augmenter le nombre de produit
    ModifierPage.prototype.increase = function () {
        this.number++;
    };
    //Fonction pour dimunier le nombre de produit
    ModifierPage.prototype.decrease = function () {
        if (this.number > 1)
            this.number--;
        else
            alert("Il faut que le nombre soit plus de 1!");
    };
    //Fonction pour récupérer les informations d'un produit dans un serveur 
    ModifierPage.prototype.search_par_nom = function () {
        var _this = this;
        var link = 'http://tuxa.sme.utc/~na17a023/searchjson.php';
        var myData = JSON.stringify({ NomObjet: this.NomObjet });
        this.http.post(link, myData)
            .subscribe(function (data) {
            //Récupérer les informations
            _this.response = data["_body"];
            //Transférer ces informations au format JSON
            _this.response_traite = JSON.parse(_this.response);
            //Saucegarder ces informations dans variables pour afficher
            _this.Id = _this.response_traite.id;
            _this.Genre = _this.response_traite.genre;
            _this.Categorie = _this.response_traite.categorie;
            _this.Fournisseur = _this.response_traite.fournisseur;
            _this.Couleur = _this.response_traite.couleur;
            _this.Marque = _this.response_traite.couleur;
            _this.Matiere = _this.response_traite.matiere;
            _this.Etat = _this.response_traite.etat;
            _this.Prix = _this.response_traite.prix;
            _this.number = _this.response_traite.quantite;
            _this.Vintage = _this.response_traite.vintage;
            _this.Description = _this.response_traite.description;
            _this.Poid = _this.response_traite.poid;
            _this.Statut = _this.response_traite.statut;
            _this.avatar1 = _this.response_traite.photo1;
            _this.avatar2 = _this.response_traite.photo2;
            _this.avatar3 = _this.response_traite.photo3;
            _this.avatar4 = _this.response_traite.photo4;
            _this.avatar5 = _this.response_traite.photo5;
            _this.avatar6 = _this.response_traite.photo6;
            //calculer le nombre de photo retourné par le serveur
            if (_this.avatar1 == '') {
                _this.counter = 1;
            }
            else {
                if (_this.avatar2 == '') {
                    _this.counter = 2;
                }
                else {
                    if (_this.avatar3 == '') {
                        _this.counter = 3;
                    }
                    else {
                        if (_this.avatar4 == '') {
                            _this.counter = 4;
                        }
                        else {
                            if (_this.avatar5 == '') {
                                _this.counter = 5;
                            }
                            else {
                                if (_this.avatar6 == '') {
                                    _this.counter = 6;
                                }
                                else
                                    _this.counter = 7;
                            }
                        }
                    }
                }
            }
        }, function (error) {
            console.log("Oooops!");
        });
    };
    //Fonction pour mettre à jour les informations d'un produit
    ModifierPage.prototype.submit = function () {
        var _this = this;
        var link = 'http://tuxa.sme.utc/~na17a023/update.php';
        var myData = JSON.stringify({
            Id: this.Id,
            NomObjet: this.NomObjet,
            Categorie: this.Categorie,
            Fournisseur: this.Fournisseur,
            Couleur: this.Couleur,
            Genre: this.Genre,
            Marque: this.Marque,
            Matiere: this.Matiere,
            Etat: this.Etat,
            Prix: this.Prix,
            Quantite: this.number,
            Vintage: this.Vintage,
            Poid: this.Poid,
            Description: this.Description,
            Statut: this.Statut,
            Photo1: this.avatar1,
            Photo2: this.avatar2,
            Photo3: this.avatar3,
            Photo4: this.avatar4,
            Photo5: this.avatar5,
            Photo6: this.avatar6,
        });
        //Envoyer les informations du format JSON
        this.http.post(link, myData)
            .subscribe(function (data) {
            _this.response = data["_body"];
            alert(_this.response);
        }, function (error) {
            console.log("Oooops!");
        });
        //Aller à la page "Choix"
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__choix_choix__["a" /* ChoixPage */], {
            Nom: this.NomObjet
        });
    };
    ModifierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modifier',template:/*ion-inline-start:"/Users/apple/Desktop/Emmaus/src/pages/modifier/modifier.html"*/'<!--\n  Generated template for the ModifierPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="color">\n    <ion-title class="color">modifier</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h4>ID: {{Id}}</h4> \n    <h4>Statut: {{Statut}}</h4>\n    <h4>Categorie: {{Categorie}}</h4>\n    <br/>\n    <div class="list">\n           <div class="item item-input item-select">\n              <div class="input-label">\n                Categorie de Fournisseur\n              </div>\n              <select [(ngModel)]="Fournisseur" style="width:150px" name="fourni" id="fourni" >\n                  <option value=\'Fournisseur1\'>Fournisseur1</option>\n                  <option value=\'Fournisseur2\'>Fournisseur2</option>\n              </select>\n            </div>\n            <br/>\n    </div>    \n    <div class="content has-header">\n          <p>Nom d\'objet*</p>\n          <div class="list">\n            <label class="item item-input">\n              <input type="text" placeholder="" [(ngModel)]="NomObjet">\n            </label>\n          </div>\n    </div>\n    <br/>\n    <button ion-button color="light" (click)="presentActionSheet()">Photo+<ion-icon md="md-add-circle"></ion-icon></button>\n    <button ion-button color="light" (click)="deletePhoto()">Remove<ion-icon name=\'close\'></ion-icon></button>\n    <br/>\n    <div class="div">\n        <ion-img class="header-image" src={{avatar1}}></ion-img>\n        <ion-img class="header-image" src={{avatar2}}></ion-img>\n        <ion-img class="header-image" src={{avatar3}}></ion-img>\n    </div>\n    <div class="div">\n        <ion-img class="header-image" src={{avatar4}}></ion-img>\n        <ion-img class="header-image" src={{avatar5}}></ion-img>\n        <ion-img class="header-image" src={{avatar6}}></ion-img>\n    </div>  \n    <br/>\n    <div class="item item-input item-select">\n        <div class="input-label">\n          Genre de vetement\n        </div>\n        <select [(ngModel)]="Genre" style="width:150px" name="vetement_genre" id="vetement_genre" >\n          <optgroup label="Genre" >\n            <option selected="" value="Homme">Homme</option>\n            <option value="Femme">Femme</option>\n            <option value="Garcon">Garcon</option>\n            <option value="Fille">Fille</option>\n          </optgroup>\n        </select>\n      </div>\n      <div class="content has-header">\n          <p >Matiere</p>\n          <div class="list">\n            <label class="item item-input">\n              <input type="text" placeholder="" [(ngModel)]="Matiere">\n            </label>\n          </div>\n      </div>\n      <div class="content has-header">\n            <p>Marque</p>\n            <div class="list">\n              <label class="item item-input">\n                <input type="text" placeholder="" [(ngModel)]="Marque">\n              </label>\n            </div>\n      </div>\n      <div class="content has-header">\n           <p>Couleur</p>\n             <div class="list">\n              <label class="item item-input">\n                <input type="text" placeholder="" [(ngModel)]="Couleur">\n              </label>\n            </div>\n      </div>\n      <div class="content has-header">\n        <p>Poid (Kg)</p>\n          <div class="list">\n            <label class="item item-input">\n              <input type="text" placeholder="" [(ngModel)]="Poid">\n            </label>\n          </div>\n      </div>\n      <div class="content has-header">\n        <p>Description</p>\n          <div class="list">\n            <label class="item item-input">\n              <textarea rows="3" cols="20" placeholder="Description jusqu\'a 2000 caractere" [(ngModel)]="Description"> </textarea>\n            </label>\n          </div>\n      </div>\n      <div class="item item-input item-select">\n        <div class="input-label">\n          Etat\n        </div>\n        <select [(ngModel)]="Etat" style="width:150px" name="vetement_etat" id="vetement_etat" >\n        <optgroup label="Etat" >\n          <option value="Bien">Bien</option>\n          <option value="Moyen">Moyen</option>\n          <option value="Mal">Mal</option>\n        </optgroup>\n        </select>\n      </div> \n      <div class="list">\n        <div class="item item-divider"> \n          VINTAGE\n        </div>\n        <label class="toggle toggle-assertive">\n          <input type="checkbox" [(ngModel)]="Vintage">\n            <div class="track">\n              <div class="handle"></div>\n            </div>\n        </label>\n      </div>\n      <div class="content has-header">\n        <p >Prix</p>\n        <div class="list">\n          <label class="item item-input">\n            <input type="text" placeholder="" [(ngModel)]="Prix">\n          </label>\n        </div>\n      </div>\n      Nombre :\n      <button ion-button color="light" (click)="decrease()">-</button>\n      {{number}}\n      <button ion-button color="light" (click)="increase()">+</button>\n      <br/>\n      <button ion-button color="light" full (click)="submit()">Sauvegarder</button>\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Desktop/Emmaus/src/pages/modifier/modifier.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], ModifierPage);
    return ModifierPage;
}());

//# sourceMappingURL=modifier.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/choix/choix.module": [
		284,
		5
	],
	"../pages/infogeneral/infogeneral.module": [
		285,
		4
	],
	"../pages/modifier/modifier.module": [
		286,
		3
	],
	"../pages/searchresult/searchresult.module": [
		287,
		2
	],
	"../pages/vetementinfo/vetementinfo.module": [
		289,
		1
	],
	"../pages/vetementvalidation/vetementvalidation.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choix_choix__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, sqlite, http) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.http = http;
        this.http = http;
        this.response = '';
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
    HomePage.prototype.authen = function (login, mdp) {
        var _this = this;
        if (login == null || login == "")
            alert("Veuillez saisir votre identifiant!");
        else if (mdp == null || mdp == "")
            alert("Veuillez saisir votre mot de passe!");
        else {
            var link = 'http://tuxa.sme.utc/~na17a023/login.php';
            var myData = JSON.stringify({ Login: login });
            this.http.post(link, myData)
                .subscribe(function (data) {
                _this.response = data["_body"];
                if (_this.response == mdp)
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choix_choix__["a" /* ChoixPage */]);
                else
                    alert("Identifiant ou mot de passe incorrct!");
            }, function (error) {
                console.log("Oooops!");
            });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/apple/Desktop/Emmaus/src/pages/home/home.html"*/'<ion-header class="color">\n  <ion-navbar class="color">\n    <ion-title class="color">\n      Welcome to Lab Emmaus\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="list">\n    <label class="item item-input">\n      <input type="text" placeholder="Identifiant" [(ngModel)]="login">\n    </label>\n    <br/>\n    <br/>\n    <label class="item item-input">\n      <input type="text" placeholder="Mot de passe" [(ngModel)]="mdp">\n    </label>\n  </div>\n\n  <button ion-button color="light" full (click)="authen(login,mdp)">Submit</button>\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Desktop/Emmaus/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_choix_choix__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_modifier_modifier__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_infogeneral_infogeneral__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_vetementinfo_vetementinfo__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_vetementvalidation_vetementvalidation__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_searchresult_searchresult__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_image_picker__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_choix_choix__["a" /* ChoixPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_infogeneral_infogeneral__["a" /* InfogeneralPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_vetementinfo_vetementinfo__["a" /* VetementinfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_vetementvalidation_vetementvalidation__["a" /* VetementvalidationPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_modifier_modifier__["a" /* ModifierPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/choix/choix.module#ChoixPageModule', name: 'ChoixPage', segment: 'choix', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/infogeneral/infogeneral.module#InfogeneralPageModule', name: 'InfogeneralPage', segment: 'infogeneral', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modifier/modifier.module#ModifierPageModule', name: 'ModifierPage', segment: 'modifier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/searchresult/searchresult.module#SearchresultPageModule', name: 'SearchresultPage', segment: 'searchresult', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vetementvalidation/vetementvalidation.module#VetementvalidationPageModule', name: 'VetementvalidationPage', segment: 'vetementvalidation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vetementinfo/vetementinfo.module#VetementinfoPageModule', name: 'VetementinfoPage', segment: 'vetementinfo', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_choix_choix__["a" /* ChoixPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_infogeneral_infogeneral__["a" /* InfogeneralPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_vetementinfo_vetementinfo__["a" /* VetementinfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_vetementvalidation_vetementvalidation__["a" /* VetementvalidationPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_modifier_modifier__["a" /* ModifierPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/apple/Desktop/Emmaus/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/apple/Desktop/Emmaus/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoixPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infogeneral_infogeneral__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__searchresult_searchresult__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChoixPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoixPage = (function () {
    function ChoixPage(navCtrl, navParams, imagePicker, camera, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.barcodeScanner = barcodeScanner;
        /*POUR BASE DE DONNEES LOCAL
          NE PLUS UTILISER
        this.sqlite.create({
          name: 'EmmausTest.db',
          location: 'default'
        }).then((database: SQLiteObject) => { this.myAppDatabase = database; })
        */
    }
    ChoixPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoixPage');
    };
    //ALLER à la page infogeneral pour entrer un nouveau objet
    ChoixPage.prototype.goinfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__infogeneral_infogeneral__["a" /* InfogeneralPage */]);
    };
    //Aller à la page searchresult 
    //nom de produit est transféré comme un paramètre
    ChoixPage.prototype.search_par_nom = function (produit_nom) {
        if (produit_nom != null || produit_nom == "") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__searchresult_searchresult__["a" /* SearchresultPage */], {
                Nom: produit_nom
            });
        }
        else {
            alert("nom vide!");
        }
    };
    //Fonction pour scanner un code barre ou QR code
    ChoixPage.prototype.scanQR = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            if (barcodeData.cancelled) {
                console.log("User cancelled the action!");
                return false;
            }
            console.log("Scanned successfully!");
            console.log(barcodeData);
            _this.scannedText = JSON.stringify(barcodeData);
            alert("Résultat : " + _this.scannedText);
        }, function (err) {
            console.log(err);
        });
    };
    ChoixPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choix',template:/*ion-inline-start:"/Users/apple/Desktop/Emmaus/src/pages/choix/choix.html"*/'<!--\n  Generated template for the ChoixPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="color">\n    <ion-title class="color">choix</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button color="light"  full (click)="goinfo()">Entrer un nouveau objet</button>\n  <br/>\n  <br/>\n  <label class="item item-input" full>\n    <input type="text" placeholder="Nom" [(ngModel)]="nom_cherche">\n  </label>\n  <button ion-button color="light" full (click)="search_par_nom(nom_cherche)">Chercher les produits</button>\n  <br/>\n  <br/>\n  <button ion-button color="light" full (click)="scanQR()">Code barre Scanner</button>\n</ion-content>\n'/*ion-inline-end:"/Users/apple/Desktop/Emmaus/src/pages/choix/choix.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ChoixPage);
    return ChoixPage;
}());

//# sourceMappingURL=choix.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map