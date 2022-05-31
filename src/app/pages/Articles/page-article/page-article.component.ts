import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ArticleDto} from "../../../model/articleDto";
import {ArticleService} from "../../../services/article/article.service";

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {

  listArticle: Array<ArticleDto> = [];
  errorMsg = '' ;

  constructor(private router: Router,
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  nouvelArticle() {
      this.router.navigate(['nouvelArticle'])
  }

  getAllArticles() {
    this.articleService.getAllArticles().subscribe(data => {
      this.listArticle = data ;
    })
  }


  handleSuppression(event: any) {
    if (event === 'success') {
        this.getAllArticles();
    } else {
        this.errorMsg = event ;
    }
  }
}
