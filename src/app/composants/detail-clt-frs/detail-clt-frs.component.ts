import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientDto} from "../../model/clientDto";
import {Router} from "@angular/router";
import {ClientService} from "../../services/client/client.service";
import {FournisseurService} from "../../services/fournisseur/fournisseur.service";

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrls: ['./detail-clt-frs.component.scss']
})
export class DetailCltFrsComponent implements OnInit {

  @Input()
  clientFournisseur: any = {} ;

  @Input()
  origin: string = '';

  idToDelete = -1 ;

  errorMsg: any ;

  @Output()
  suppressionResult = new EventEmitter();

  constructor(private router: Router,
              private clientService: ClientService,
              private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
  }


  modifierClientFrs(clientFournisseur: any) {

    if (this.origin === 'client') {
      this.router.navigate(['nouveauClient', this.clientFournisseur.id]);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouveauFournisseur', this.clientFournisseur.id]);
    }

  }

  annulerSuppression() {
    this.idToDelete = -1 ;
  }

  confirmEtSupprimer() {
    if (this.idToDelete !== -1) {

      if (this.origin === 'client') {
        this.clientService.delete(this.idToDelete).subscribe(data => {
          this.suppressionResult.emit('success')
        }, error => {
          this.suppressionResult.emit(error.error.error);
          this.errorMsg = error.error.message; //correcte
        });

      } else if (this.origin === 'fournisseur') {

        this.fournisseurService.delete(this.idToDelete).subscribe(data => {
          this.suppressionResult.emit('success')
        }, error => {
          this.suppressionResult.emit(error.error.error);
          this.errorMsg = error.error.message; //correcte
        });
      }

    }
  }


  selectForDelete(id: any) {
    this.idToDelete = id;
  }
}
