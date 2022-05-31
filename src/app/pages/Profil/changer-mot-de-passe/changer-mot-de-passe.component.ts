import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategorieService} from "../../../services/categorie/categorie.service";
import {ChangerMdpDto} from "../../../model/changer-mdp-dto";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  changerMdpDto: ChangerMdpDto = {};
  ancienMdp: string = '' ;
  storage: Storage = localStorage;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {

    if (this.storage.getItem("origin") && this.storage.getItem("origin") === "inscription") {
      this.ancienMdp = "som3R@ndOmP@$$word";
      localStorage.removeItem("origin") ;
    }

  }

  cancel() {
    this.router.navigate(['profil']);
  }

  changerMotDePasseUtilisateur() {

    this.changerMdpDto.id = this.userService.getConnectedUser().id ;
    this.userService.changerMotdePasse(this.changerMdpDto).subscribe( data => {
      this.router.navigateByUrl('/profil') ;
    })

  }
}
