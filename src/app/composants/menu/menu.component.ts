import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Menu} from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

 public menuProperties: Array<Menu> = [
  {
    id: "1",
    titre:  "Tableau de bord",
    icon: "fas fa-chart-line",
    url: "",
    sousMenu: [
      {
        id: "11",
        titre: "Vue d'ensemble",
        icon: "fas fa-chart-pie",
        url: "",
      },
      {
        id: "12",
        titre: "Statistiques",
        icon: "fas fa-chart-bar",
        url: "statistiques",
      }
    ]
  },
  {
    id: "2",
    titre:  "Articles",
    icon: "fas fa-boxes",
    url: "",
    sousMenu: [
      {
        id: "21",
        titre: "Articles",
        icon: "fas fa-box-open",
        url: "articles",
      },
      {
        id: "22",
        titre: "Mouvement de Stock",
        icon: "fas fa-balance-scale-left",
        url: "mvtStck",
      }
    ]
  },
  {
    id: "3",
    titre:  "Clients",
    icon: "fas fa-user-friends",
    url: "",
    sousMenu: [
      {
        id: "31",
        titre: "Clients",
        icon: "fas fa-user-circle",
        url: "clients",
      },
      {
        id: "32",
        titre: "Commande Clients",
        icon: "fas fa-address-card",
        url: "commandeClient",
      }
    ]
  },
  {
    id: "4",
    titre:  "Fournisseurs",
    icon: "fas fa-people-carry",
    url: "",
    sousMenu: [
      {
        id: "41",
        titre: "Fournisseurs",
        icon: "fas fa-user-clock",
        url: "fournisseurs",
      },
      {
        id: "42",
        titre: "Commande Fournisseurs",
        icon: "fas fa-user-edit",
        url: "commandeFournisseur",
      }
    ]
  },
  {
    id: "5",
    titre:  "Parametrages",
    icon: "fas fa-cogs",
    url: "",
    sousMenu: [
      {
        id: "51",
        titre: "Categories",
        icon: "fas fa-tasks",
        url: "categories",
      },
      {
        id: "52",
        titre: "Utilisateurs",
        icon: "fas fa-users-cog",
        url: "utilisateurs",
      }
    ]
  }
];

  private lastSelectedMenu?: Menu;

  constructor( private router: Router) {

   }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
     if (this.lastSelectedMenu) {
       this.lastSelectedMenu.active = false;
     }
       menu.active = true;
       this.lastSelectedMenu = menu;
       this.router.navigate([menu.url]) ;
  }

}
