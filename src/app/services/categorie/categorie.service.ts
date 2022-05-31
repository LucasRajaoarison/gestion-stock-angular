import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieDto} from "../../model/categorieDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private host: string = "http://localhost:8080/api";


  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<CategorieDto[]> {
    const productUrl = `${this.host}/categories`;
      return this.httpClient.get<CategorieDto[]>(productUrl);
  }

  createCategorie(categorie: CategorieDto): Observable<CategorieDto> {
    const createurl = `${this.host}/categorie/create`;
    return this.httpClient.post<CategorieDto>(createurl, categorie) ;
  }

  findById(idCategory: any): Observable<CategorieDto> {
    const findUrl = `${this.host}/categorie/${idCategory}`;
    return this.httpClient.get<CategorieDto>(findUrl);
  }

  delete(categorieIdToDelete: number): Observable<any>{
    const deleteUrl = `${this.host}/categorie/${categorieIdToDelete}`;
    return this.httpClient.delete<any>(deleteUrl) ;
  }
}


