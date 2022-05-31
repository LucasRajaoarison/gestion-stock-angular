import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelArticleComponent } from './pages/Articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/Articles/page-article/page-article.component';
import { MouvementStckComponent } from './pages/MouvementStck/mouvement-stck/mouvement-stck.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import {PageClientComponent} from "./pages/Client/page-client/page-client.component";
import {PageFournisseurComponent} from "./pages/Fournisseur/page-fournisseur/page-fournisseur.component";
import {NouveauCltFrsComponent} from "./composants/nouveau-clt-frs/nouveau-clt-frs.component";
import {PageCmdCltFrsComponent} from "./pages/page-cmd-clt-frs/page-cmd-clt-frs.component";
import {NouvelleCmdCltFrsComponent} from "./composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component";
import {PageCategoriesComponent} from "./pages/Categories/page-categories/page-categories.component";
import {NouvelleCategorieComponent} from "./pages/Categories/nouvelle-categorie/nouvelle-categorie.component";
import {PageUtilisateurComponent} from "./pages/Utilisateur/page-utilisateur/page-utilisateur.component";
import {NouvelUtilisateurComponent} from "./pages/Utilisateur/nouvel-utilisateur/nouvel-utilisateur.component";
import {PageProfilComponent} from "./pages/Profil/page-profil/page-profil.component";
import {ChangerMotDePasseComponent} from "./pages/Profil/changer-mot-de-passe/changer-mot-de-passe.component";
import {ApplicationGuardService} from "./services/guard/application-guard.service";

const routes: Routes = [

  {
    path: "login",
    component: PageLoginComponent
  },
  {
    path: "inscrire",
    component: PageInscriptionComponent
  } ,
  {
    path: "",
    canActivate: [ApplicationGuardService],
    component: PageDashboardComponent,
    children: [
      {
        path: "statistiques",
        component: PageStatistiqueComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "articles",
        component: PageArticleComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "nouvelArticle",
        component: NouvelArticleComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "nouvelArticle/:id",
        component: NouvelArticleComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "mvtStck",
        component: MouvementStckComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "clients",
        component: PageClientComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "nouveauClient",
        component: NouveauCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: "nouveauClient/:idClient",
        component: NouveauCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: "commandeClient",
        component: PageCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: "nouvelleCommandeClt",
        component: NouvelleCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: "fournisseurs",
        component: PageFournisseurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "nouveauFournisseur",
        component: NouveauCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: "nouveauFournisseur/:idFournisseur",
        component: NouveauCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: "commandeFournisseur",
        component: PageCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: "nouvelleCommandeFrs",
        component: NouvelleCmdCltFrsComponent,
        canActivate: [ApplicationGuardService],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: "categories",
        component: PageCategoriesComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "nouvelleCategorie",
        component: NouvelleCategorieComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "nouvelleCategorie/:idCategorie",
        component: NouvelleCategorieComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "utilisateurs",
        component: PageUtilisateurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "nouvelUtilisateur",
        component: NouvelUtilisateurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "profil",
        component: PageProfilComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: "changerMdp",
        component: ChangerMotDePasseComponent,
        canActivate: [ApplicationGuardService]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
