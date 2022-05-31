import { Component, OnInit } from '@angular/core';

import {EntrepriseService} from "../../services/entreprise/entreprise.service";
import {error} from "ng-packagr/lib/utils/log";
import {EntrepriseDto} from "../../model/entrepriseDto";
import {AdresseDto} from "../../model/adresseDto";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {StockValidator} from "../../validators/stock-validator";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {

  private user: any;
  entrepriseDto: EntrepriseDto = {};
  public mode?: number;
  registrationFormGroup: FormGroup | undefined ;
  errorMsg: any;

  storage: Storage = sessionStorage;

  public fullUser: any;
  name: any;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private entrepriseService: EntrepriseService) { }

  ngOnInit(): void {


    this.registrationFormGroup = this.formBuilder.group({

      nom: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),
      mail: new FormControl('', [Validators.required, Validators.minLength(2),
                                                        StockValidator.notOnlyWhitespace,  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      codeFiscal: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),
      description: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),
      numTel: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),


      adresse: this.formBuilder.group({

        adresse1: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),
        adresse2: new FormControl(),
        ville: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),
        codePostal: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),
        pays: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),


      })


    })

  }


/*
  onRegister(user: any) {
    this.entrepriseService.sinscrire(user)
      .subscribe( data => {
          this.user = data ;
          console.log("++++++++++++++++++++++");
          console.log(user);
          this.mode = 1;
        },
        error => {
          console.log(user);
          this.errorMsg = error.error.message;
          this.mode = 0;
        });
  }*/


  //creer des getter pour utiliser dans le HTML
  get nom() {return this.registrationFormGroup?.get('nom') ;}
  get mail() {return this.registrationFormGroup?.get('mail') ;}
  get codeFiscal() {return this.registrationFormGroup?.get('codeFiscal') ;}
  get description() {return this.registrationFormGroup?.get('description') ;}
  get numTel() {return this.registrationFormGroup?.get('numTel') ;}
  get adresse1() { return this.registrationFormGroup?.get('adresse.adresse1') ;}
  get codePostal() { return this.registrationFormGroup?.get('adresse.codePostal') ;}
  get pays() { return this.registrationFormGroup?.get('adresse.pays') ;}
  get ville() { return this.registrationFormGroup?.get('adresse.ville') ;}



  onSubmit() {

    console.log("Handling the submit button");
    //console.log(this.registrationFormGroup?.get("adresse")?.value) ;

    let entreprise = new EntrepriseDto();
    entreprise.nom = this.registrationFormGroup?.value.nom;
    entreprise.mail = this.registrationFormGroup?.value.mail;
    entreprise.codeFiscal = this.registrationFormGroup?.value.codeFiscal;
    entreprise.description = this.registrationFormGroup?.value.description;
    entreprise.numTel = this.registrationFormGroup?.value.numTel;

    entreprise.adresse = this.registrationFormGroup?.controls['adresse'].value ;

    this.entrepriseService.sinscrire(entreprise)
      .subscribe(data => {

        this.entrepriseDto = data;
        console.log(this.entrepriseDto);
        alert("Entreprise /ou Utilisateur creer avec succes!!");
       this.connectEntreprise();

        this.mode = 1;

      }, error => {
        this.errorMsg = "Entreprise E-mail existe deja";
        console.log(error);
        console.log(error.error);
        alert(`There was an error : ${error.error}`) ;
        this.mode = 0;
      });
  }


  connectEntreprise() {

    const request: any = {
      mail: this.entrepriseDto.mail,
      password: "som3R@ndOmP@$$word"
    };
    this.userService.login(request).subscribe(response => {

      //on prend le token
      let  jwt = response.headers.get('Authorization');
      console.log(response.headers.get('Authorization')) ;
      this.userService.saveToken(jwt);

      this.getUserByEmail(request.mail) ;
      localStorage.setItem("origin", "inscription") ;

      this.router.navigateByUrl('/changerMdp') ;
    })

  }

  getUserByEmail(mail: any) {

    if (this.userService.isAuthenticated()) {

      this.userService.getUserDetails(mail)
        .subscribe(user => {
          this.userService.setConnectedUser(user) ;
        });

    }
  }

}
