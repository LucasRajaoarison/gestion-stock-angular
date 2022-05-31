import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ArticleDto} from "../../model/articleDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private host: string = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  savePhoto(params: any): Observable<any> {
    const createUrl = `${this.host}/photos/${params.id}/${params.title}/${params.context}`;
    return this.httpClient.post<any>(createUrl, params) ;
  }

}
