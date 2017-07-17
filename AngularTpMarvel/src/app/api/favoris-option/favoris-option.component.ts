import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-favoris-option',
  templateUrl: './favoris-option.component.html',
  styleUrls: ['./favoris-option.component.css']
})
export class FavorisOptionComponent implements OnInit {
  @Input() favoris: Array<string> = [];
  @Output() charName: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }


  ngOnInit() {
  }

  loadChar(event) {

    const target = event.target;
    const idAttr = target.id;

    this.charName.emit(idAttr);
  }

}
