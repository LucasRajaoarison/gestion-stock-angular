import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../../services/client/client.service";
import {ClientDto} from "../../../model/clientDto";

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {

  listClients: Array<ClientDto> = [] ;

  errorMsg = '' ;

  constructor(private router: Router,
              private clientService: ClientService) { }

  ngOnInit(): void {
      this.getAllClients();
  }

  nouveauClient() {
    this.router.navigate(['nouveauClient'])
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(clients => {
      this.listClients = clients;
    })
  }

  handleSuppression(event: any) {
    if (event === 'success') {
      this.getAllClients();
    } else {
      this.errorMsg = event ;
    }
  }
}
