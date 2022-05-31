import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UtilisateurDto} from 'src/app/model/utilisateurDto';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Observable} from "rxjs";
import {ChangerMdpDto} from "../../model/changer-mdp-dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
              private jwtHelper: JwtHelperService,
              private router: Router) { }

  private host: string = "http://localhost:8080";
  private roles: Array<any> = [] ;
  private jwtToken:any = null;
  public isLoggedIn: boolean = false;
  public loggedUser?: string;

  storage: Storage = sessionStorage;


  login(utilisateurDto: UtilisateurDto) {
    return this.httpClient.post(this.host + "/login", utilisateurDto, {observe: 'response'}) ;
  }

  saveToken(jwt: any) {

    localStorage.setItem('token', jwt) ;
    this.jwtToken = jwt;
    this.decodeJWT();
  }

  decodeJWT() {
    if (this.jwtToken == undefined) {
      return
    }
    const decodedToken = this.jwtHelper.decodeToken(this.jwtToken);

    this.roles = decodedToken.roles;
    //sub = indentifiant de l'utilistaeur connectés
    this.loggedUser = decodedToken.sub;
    console.log("Le E-mail du user connecter est " + this.loggedUser);
  }

  loadToken() {
    this.jwtToken=localStorage.getItem('token');
    return this.jwtToken;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {

      this.isLoggedIn = true;
      // Check if the token is expired and return true or false
      return !this.jwtHelper.isTokenExpired(token!);

    }
    return false;
  }

  logout() {
    this.loggedUser = undefined;
    this.roles = [null];
    this.jwtToken=null;
    this.isLoggedIn = false;
    this.storage.removeItem('userEmail');
    this.storage.removeItem('cartItems');
    localStorage.removeItem('token');
  }



  /*getToken() {
    return this.jwtToken;
  }*/

  isTokenExpired(): boolean {
    return this.jwtHelper.isTokenExpired(this.jwtToken) ;
  }

  isAdmin() {
    for(let r of this.roles) {
      if (r.authority == 'ADMIN') {
        return true;
      }
    }
    return false;
  }

  setConnectedUser(utilisateurDto: UtilisateurDto) {
    localStorage.setItem("connectedUser", JSON.stringify(utilisateurDto));
  }

  getConnectedUser(): UtilisateurDto {

    if (localStorage.getItem("connectedUser")) {
      return JSON.parse(localStorage.getItem("connectedUser") as string)
    }

    return {} ;
  }

  getUserDetails(mail: string): Observable<UtilisateurDto> {
    const findUrl = `${this.host}/api/findUser/${mail}`;
    return this.httpClient.get<UtilisateurDto>(findUrl);
  }

  changerMotdePasse(changerMdpDto: ChangerMdpDto): Observable<any> {
    const changeUrl = `${this.host}/api/utilisateur/changerMdp`;
    return this.httpClient.post<ChangerMdpDto>(changeUrl, changerMdpDto);

  }


}
