import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {CategorieDto} from "../../../model/categorieDto";
import {error} from "ng-packagr/lib/utils/log";

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrls: ['./page-categories.component.scss']
})
export class PageCategoriesComponent implements OnInit {

  listCategorie: Array<CategorieDto> = [] ;
  categorieIdToDelete = -1 ;
  errorMsg: any ;

  constructor(private router: Router,
              private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  nouvelleCategorie() {
    this.router.navigate(['nouvelleCategorie']);
  }

  getAllCategories() {
    this.categorieService.getAllCategories().subscribe(data => {
        this.listCategorie = data;
    })
  }

  modifierCategorie(id: any) {
    this.router.navigate(['nouvelleCategorie', id]) ;
  }

  confirmEtSupprimerCategorie() {

    if (this.categorieIdToDelete !== -1) {
      console.log("ICIIIIIII") ;
      this.categorieService.delete(this.categorieIdToDelete).subscribe(resp => {
        this.getAllCategories();
      }, error => {
        this.errorMsg = error.error.message; //correcte
      }) ;
    }

  }

  annulerSuppressionCategorie() {
      this.categorieIdToDelete = -1;
  }

  selectCatPourSupprimer(id: any) {
      this.categorieIdToDelete = id ;
  }
}
