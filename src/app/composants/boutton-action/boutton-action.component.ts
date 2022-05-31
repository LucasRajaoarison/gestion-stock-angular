import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {

  @Input()
  isNouveauVisible: boolean = true;
  @Input()
  isImporterVisible: boolean = true;
  @Input()
  isExporterVisible: boolean = true;


  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bouttonNouveauClick() {
    this.clickEvent.emit();
  }

}
