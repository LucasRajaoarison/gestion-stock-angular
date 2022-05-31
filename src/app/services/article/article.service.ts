import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieDto} from "../../model/categorieDto";
import {ArticleDto} from "../../model/articleDto";
import {Observable} from "rxjs";
import {UserService} from "../user/user.service";
import {FournisseurDto} from "../../model/fournisseurDto";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private host: string = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient,
              private userService: UserService) { }


  createArticle(article: ArticleDto): Observable<ArticleDto> {

    article.entreprise = this.userService.getConnectedUser().entreprise ;
    const createUrl = `${this.host}/article/create`;
    return this.httpClient.post<ArticleDto>(createUrl, article) ;
  }

  getAllArticles(): Observable<ArticleDto[]> {
    const articleUrl = `${this.host}/articles` ;
    return this.httpClient.get<ArticleDto[]>(articleUrl);
  }

  findById(idArticle: any): Observable<ArticleDto> {
    const findUrl = `${this.host}/article/${idArticle}`;
    return this.httpClient.get<ArticleDto>(findUrl);
  }

  delete(articleIdToDelete: number): Observable<any>{
    const deleteUrl = `${this.host}/article/${articleIdToDelete}`;
    return this.httpClient.delete<any>(deleteUrl) ;
  }

  update(id: number, article: ArticleDto): Observable<ArticleDto> {
    article.entreprise = this.userService.getConnectedUser().entreprise ;
    const updateUrl = `${this.host}/article/create/${id}`;
    return this.httpClient.put(updateUrl, article) ;
  }
}
