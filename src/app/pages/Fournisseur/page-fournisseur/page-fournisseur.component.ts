import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FournisseurService} from "../../../services/fournisseur/fournisseur.service";
import {ClientDto} from "../../../model/clientDto";
import {FournisseurDto} from "../../../model/fournisseurDto";

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrls: ['./page-fournisseur.component.scss']
})
export class PageFournisseurComponent implements OnInit {

  listFournisseur: Array<FournisseurDto> = [] ;
  errorMsg = '' ;

  constructor(private router: Router,
              private fournisseurService: FournisseurService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllFournisseur();
  }

  nouveauFournisseur() {
    this.router.navigate(['nouveauFournisseur'])
  }

  getAllFournisseur() {
    this.fournisseurService.getAllFournisseurs().subscribe(fournisseur => {
      this.listFournisseur = fournisseur;
    })
  }

  handleSuppression(event: any) {
    if (event === 'success') {
      this.getAllFournisseur();
    } else {
      this.errorMsg = event ;
    }
  }

}
