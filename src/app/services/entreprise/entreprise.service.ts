import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EntrepriseDto} from "../../model/entrepriseDto";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private host: string = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }


  sinscrire(entreprise: EntrepriseDto): Observable<any> {
      return this.httpClient.post<EntrepriseDto>(this.host + "/entreprise/create", entreprise) ;
  }

}
