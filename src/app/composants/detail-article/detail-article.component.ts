import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleDto} from "../../model/articleDto";
import {ArticleService} from "../../services/article/article.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StockValidator} from "../../validators/stock-validator";



@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  @Input()
  articleDto: ArticleDto = {} ;

  @Output()
  suppressionResult = new EventEmitter();

  articleIdToDelete = -1 ;

  errorMsg: any ;

  constructor(private router: Router,
              private articleService: ArticleService) { }

  ngOnInit(): void {

  }


  modifierArticle(articleDto: ArticleDto) {
      this.router.navigate(['nouvelArticle', this.articleDto.id]);

  }

  annulerSuppressionArticle() {
    this.articleIdToDelete = -1 ;
  }

  confirmEtSupprimerArticle() {
    if (this.articleIdToDelete !== -1) {
      this.articleService.delete(this.articleIdToDelete).subscribe(resp => {
        this.suppressionResult.emit('success')
      }, error => {
        this.suppressionResult.emit(error.error.error);
        this.errorMsg = error.error.message; //correcte
      }) ;
    }
  }

  selectArticleDelete(id: any) {
    this.articleIdToDelete =  id;
  }
}
