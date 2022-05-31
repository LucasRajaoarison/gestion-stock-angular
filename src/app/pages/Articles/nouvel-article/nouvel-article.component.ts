import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../../../services/article/article.service";
import {ArticleDto} from "../../../model/articleDto";
import {error} from "ng-packagr/lib/utils/log";
import {CategorieDto} from "../../../model/categorieDto";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StockValidator} from "../../../validators/stock-validator";
import {PhotoService} from "../../../services/photo/photo.service";

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {

  article: ArticleDto = {}  ;
  errorMsg: any;
  categorieDto: CategorieDto = {} ;
  AllCategorie: Array<CategorieDto> = [] ;

  nouveauArticleFormGroup!: FormGroup;
  mode: number = 0;
  editable: boolean = false;

  id!: string;
  isAddMode: boolean = true;

  imagUrl: string | ArrayBuffer = "assets/IronMan.jpg";
  file: File | null = null;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private articleService: ArticleService,
              private categorieService: CategorieService,
              private photoService: PhotoService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.articleForm();
    this.id = this.activatedRoute.snapshot.params['id'];

    this.isAddMode = !this.id;

    console.log(this.isAddMode);
    console.log(!this.isAddMode);

    if (!this.isAddMode) {
      this.articleService.findById(this.id).subscribe(data => {
        this.nouveauArticleFormGroup.patchValue(data) ;
        console.log(this.nouveauArticleFormGroup);
      })
    }

  }

  articleForm() {
    let whiteSpace = "/^(\\s+\\S+\\s*)*(?!\\s).*$/";
    this.nouveauArticleFormGroup = this.formBuilder.group({


      codeArticle: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),
      designation: new FormControl('', [Validators.required, Validators.minLength(2), StockValidator.notOnlyWhitespace]),
      prixUnitaireHT: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern(/[\S]/)]),
      tauxTva: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern(/[\S]/)]),
      prixUnitaireTTC: new FormControl(''),
      categorie: new FormControl('', Validators.required),

    })
  }

  get code() {return this.nouveauArticleFormGroup?.get('codeArticle') ;}
  get designation() {return this.nouveauArticleFormGroup?.get('designation') ;}
  get prixHT() {return this.nouveauArticleFormGroup?.get('prixUnitaireHT') ;}
  get taux() {return this.nouveauArticleFormGroup?.get('tauxTva') ;}
  get prixTTC() {return this.nouveauArticleFormGroup?.get('prixUnitaireTTC') ;}
  get categ() {return this.nouveauArticleFormGroup?.get('categorie') ;}

  onSubmit() {
    if (this.isAddMode) {
      console.log("***********Creation**********");
      this.enregistrerArticle();
    } else {
      console.log("***********Modification**********");
      this.modifierArticle();
    }
  }


  cancel() {
    this.router.navigate(['articles']);
  }

  enregistrerArticle() {

   // let article = new ArticleDto();
    this.article.codeArticle = this.nouveauArticleFormGroup?.value.codeArticle ;
    this.article.designation = this.nouveauArticleFormGroup?.value.designation ;
    this.article.prixUnitaireTTC = this.nouveauArticleFormGroup?.value.prixUnitaireTTC ;
    this.article.prixUnitaireHT = this.nouveauArticleFormGroup?.value.prixUnitaireHT ;
    this.article.tauxTva = this.nouveauArticleFormGroup?.value.tauxTva ;

    this.article.categorie = this.nouveauArticleFormGroup?.value.categorie ;

    console.log(this.nouveauArticleFormGroup);

    this.articleService.createArticle(this.article).subscribe(data => {
      this.article = data ;
      this.categorieDto = this.article.categorie ? this.article.categorie : {};
      this.savePhoto(data.id!, data.codeArticle!);
      this.router.navigateByUrl('articles') ;
    }, error => {
      this.mode = 1;
      console.log(error);
     this.errorMsg = "Article non valide." ;
    })

  }

  private modifierArticle() {
    this.articleService.update(+this.id, this.nouveauArticleFormGroup.value).subscribe(data => {
      this.router.navigate(['articles']);
    })
  }


  getAllCategories() {
    this.categorieService.getAllCategories().subscribe(data => {
      this.AllCategorie = data;
    })
  }

  calculerTTC() {


    if (this.article.prixUnitaireHT && this.article.tauxTva) {

   let TTC = +this.article.prixUnitaireHT + (+(this.article.prixUnitaireHT * (this.article.tauxTva / 100)));

      this.article.prixUnitaireTTC = TTC;

    }

  }


  onFileInput(files: FileList | null) {

    if (files) {
      this.file = files.item(0)
      if (this.file)  {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event) => {
          if (fileReader.result) {
            this.imagUrl = fileReader.result ;
          }
        };
      }
    }

  }

  savePhoto(idArticle: number, titre: string) {
    if (idArticle && titre && this.file) {

      const params: any = {
        id: idArticle,
        file: this.file,
        title: titre,
        context: 'article'
      } ;
      this.photoService.savePhoto(params).subscribe(data => {
        this.router.navigate(['articles']);
      })

    } else {
      this.router.navigate(['articles']);
    }
  }

}
