import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {UtilisateurDto} from "../../model/utilisateurDto";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 connectedUser: UtilisateurDto = {} ;

  public fullUser: any;
  nom: any;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
      this.connectedUser = this.userService.getConnectedUser() ;
  }


}
