import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user/user.service";
import {ArticleDto} from "../../model/articleDto";
import {ClientDto} from "../../model/clientDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private host: string = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient,
              private userService: UserService) { }


  createClient(client: ClientDto): Observable<ClientDto> {
    const createUrl = `${this.host}/client/create`;
    debugger
    return this.httpClient.post<ClientDto>(createUrl, client) ;
  }

  getAllClients(): Observable<ClientDto[]> {
    const url = `${this.host}/clients` ;
    return this.httpClient.get<ClientDto[]>(url);
  }

  findById(idClient: any): Observable<ClientDto> {
    const findUrl = `${this.host}/client/${idClient}`;
    return this.httpClient.get<ClientDto>(findUrl);
  }

  delete(clientIdToDelete: number): Observable<any>{
    const deleteUrl = `${this.host}/client/${clientIdToDelete}`;
    return this.httpClient.delete<any>(deleteUrl) ;
  }

  update(id: number, client: ClientDto): Observable<ClientDto> {
    const updateUrl = `${this.host}/client/create/${id}`;
    return this.httpClient.put(updateUrl, client) ;
  }


}
