import { Injectable } from '@angular/core';
import {ClientDto} from "../../model/clientDto";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user/user.service";
import {FournisseurDto} from "../../model/fournisseurDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private host: string = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient,
              private userService: UserService) { }

  createFourniseur(fournisseur: FournisseurDto): Observable<FournisseurDto> {
    const createUrl = `${this.host}/fournisseur/create`;
    return this.httpClient.post<FournisseurDto>(createUrl, fournisseur) ;
  }

  getAllFournisseurs(): Observable<FournisseurDto[]> {
    const Url = `${this.host}/fournisseurs` ;
    return this.httpClient.get<FournisseurDto[]>(Url);
  }

  findById(idFournisseur: any): Observable<FournisseurDto> {
    const findUrl = `${this.host}/fournisseur/${idFournisseur}`;
    return this.httpClient.get<FournisseurDto>(findUrl);
  }

  delete(fournisseurIdToDelete: number): Observable<any>{
    const deleteUrl = `${this.host}/fournisseur/${fournisseurIdToDelete}`;
    return this.httpClient.delete<any>(deleteUrl) ;
  }

  update(id: number, fournisseur: FournisseurDto): Observable<FournisseurDto> {
    const updateUrl = `${this.host}/fournisseur/create/${id}`;
    return this.httpClient.put(updateUrl, fournisseur) ;
  }

}
