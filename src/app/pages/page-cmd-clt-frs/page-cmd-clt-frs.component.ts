import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.scss']
})
export class PageCmdCltFrsComponent implements OnInit {

   origin = '';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      // @ts-ignore
      this.origin = data.origin;
    });
  }

  nouvelleCommande() {
    if ( this.origin === 'client') {
      this.router.navigate(['nouvelleCommandeClt']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouvelleCommandeFrs']);
    }
  }
}
