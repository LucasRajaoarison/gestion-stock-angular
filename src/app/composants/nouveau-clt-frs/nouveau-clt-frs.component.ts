import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientDto} from "../../model/clientDto";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StockValidator} from "../../validators/stock-validator";
import {ClientService} from "../../services/client/client.service";
import {FournisseurService} from "../../services/fournisseur/fournisseur.service";
import {FournisseurDto} from "../../model/fournisseurDto";
import {ArticleDto} from "../../model/articleDto";

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit {

  origin = '';

  id!: string;
  isAddMode: boolean = true;

  idClient: any;

  clientDto: ClientDto =  {} ;

  nouveauCltFrsFormGroup!: FormGroup ;

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private clientService: ClientService,
              private fournisseurService: FournisseurService,
              private router: Router) { }

  ngOnInit(): void {
    this.clientFrsForm();
    this.activatedRoute.data.subscribe(data => {
      // @ts-ignore
      this.origin = data.origin;
    });

    if (this.origin === 'client') {
      this.id = this.activatedRoute.snapshot.params['idClient'];
      this.isAddMode = !this.id;

      if (!this.isAddMode) {
        this.clientService.findById(this.id).subscribe(data => {
          this.nouveauCltFrsFormGroup.patchValue(data) ;
        })
      }

    } else if (this.origin === 'fournisseur') {
      this.id = this.activatedRoute.snapshot.params['idFournisseur'];
      this.isAddMode = !this.id;

      if (!this.isAddMode) {
        this.fournisseurService.findById(this.id).subscribe(data => {
          this.nouveauCltFrsFormGroup.patchValue(data) ;
        })
      }
    }

    console.log(this.origin) ;


  }

  clientFrsForm() {

    this.nouveauCltFrsFormGroup = this.formBuilder.group({

      nom: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(2),
        StockValidator.notOnlyWhitespace]),
      mail: new FormControl('', [Validators.required, Validators.minLength(2),
        StockValidator.notOnlyWhitespace, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
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

  get nom() {return this.nouveauCltFrsFormGroup?.get('nom') ;}
  get prenom() {return this.nouveauCltFrsFormGroup?.get('prenom') ;}
  get telephone() {return this.nouveauCltFrsFormGroup?.get('numTel') ;}
  get email() {return this.nouveauCltFrsFormGroup?.get('mail') ;}
  get adresse1() { return this.nouveauCltFrsFormGroup?.get('adresse.adresse1') ;}
  get codePostal() { return this.nouveauCltFrsFormGroup?.get('adresse.codePostal') ;}
  get pays() { return this.nouveauCltFrsFormGroup?.get('adresse.pays') ;}
  get ville() { return this.nouveauCltFrsFormGroup?.get('adresse.ville') ;}


  cancelClick() {
    if (this.origin === 'client') {
          this.router.navigate(['clients']) ;
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['fournisseurs']) ;
    }
  }

  onSubmit() {
    if (this.isAddMode) {
      console.log("***********Creation**********");
      this.create();
    } else {
      console.log("***********Modification**********");
      this.modifier();
    }
  }

  create() {

    if (this.origin === 'client') {

      this.clientService.createClient(this.nouveauCltFrsFormGroup?.value).subscribe( client => {
            this.router.navigate(['clients']);
      })

    } else if (this.origin === 'fournisseur') {

      this.fournisseurService.createFourniseur(this.nouveauCltFrsFormGroup?.value).subscribe(fournisseur => {
        this.router.navigate(['fournisseurs']);
      })

    }

  }



  modifier()  {

    if (this.origin === 'client') {

      this.clientService.update(+this.id, this.nouveauCltFrsFormGroup.value).subscribe(data => {
        this.router.navigate(['clients']);
      })


    } else if (this.origin === 'fournisseur') {

     this.fournisseurService.update(+this.id, this.nouveauCltFrsFormGroup.value).subscribe(data => {
       this.router.navigate(['fournisseurs']);
     })

    }

  }



}
