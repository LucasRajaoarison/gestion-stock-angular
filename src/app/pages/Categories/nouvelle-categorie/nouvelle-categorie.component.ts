import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategorieDto} from "../../../model/categorieDto";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {error} from "ng-packagr/lib/utils/log";

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.scss']
})
export class NouvelleCategorieComponent implements OnInit {

  categorie: CategorieDto = {};
  errorMsg: Array<string> = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.updateCategorie();
  }

  cancel() {
    this.router.navigate(['categories']);
  }

  createCategorie() {
    this.categorieService.createCategorie(this.categorie).subscribe(data => {
      this.router.navigateByUrl('categories') ;
    }, error => {
      this.errorMsg = error.error.errors;
      alert("Impossible de creer une categorie, il y a une erreur") ;
    })
  }

  updateCategorie() {
    const idCategory: number = +this.activatedRoute.snapshot.paramMap.get("idCategorie")! ;
    if (idCategory) {
      this.categorieService.findById(idCategory).subscribe( cat => {
        this.categorie = cat ;
      });
    }
  }
}
