import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  mode: number = 0;
  storage: Storage = sessionStorage;
  email: string = "";

  private fullUser: any;

  errorMessage: string = '';

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    let token = this.userService.loadToken();
    if (token) {
      this.router.navigateByUrl('');
    }
  }

  onLogin(user: any) {
    console.log("Processing......");
    console.log(user);
    this.email = user.mail;
    this.userService.login(user)
      .subscribe((resp: any)=>{

          //on prend le token
          let  jwt = resp.headers.get('Authorization');
          console.log(resp.headers.get('Authorization')) ;
          this.userService.saveToken(jwt);

          this.getUserByEmail(this.email) ;

          this.router.navigateByUrl('') ;
        },
        (error: any)=>{
          console.log(error) ;
        //this.errorMessage = error.error.errorMessage;
          this.mode = 1 ;
      });
  }


  getUserByEmail(mail: any) {

    if (this.userService.isAuthenticated()) {

      this.userService.getUserDetails(mail)
        .subscribe(user => {
          this.userService.setConnectedUser(user) ;
        });

    }
  }

}
