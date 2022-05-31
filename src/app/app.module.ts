import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/Articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { MouvementStckComponent } from './pages/MouvementStck/mouvement-stck/mouvement-stck.component';
import { DetailsMouvementStckArticleComponent } from './composants/details-mouvement-stck-article/details-mouvement-stck-article.component';
import { DetailMvtStckComponent } from './composants/detail-mvt-stck/detail-mvt-stck.component';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './pages/Client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/Fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/Categories/page-categories/page-categories.component';
import { NouvelleCategorieComponent } from './pages/Categories/nouvelle-categorie/nouvelle-categorie.component';
import { PageUtilisateurComponent } from './pages/Utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/Utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/Profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/Profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { NouvelArticleComponent } from './pages/Articles/nouvel-article/nouvel-article.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {HttpInterceptorService} from "./services/interceptor/http-interceptor.service";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiqueComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    NouvelArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    MouvementStckComponent,
    DetailsMouvementStckArticleComponent,
    DetailMvtStckComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategoriesComponent,
    NouvelleCategorieComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
