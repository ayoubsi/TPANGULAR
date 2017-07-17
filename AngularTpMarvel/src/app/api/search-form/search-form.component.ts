import {Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  charNameInput: string;
  @Output() charName: EventEmitter<string> = new EventEmitter<string>();
  @Output() characterNameFav: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }


  loadChar() {
    this.charName.emit(this.charNameInput);
  }

  addInFavorisOption() {
    this.characterNameFav.emit(this.charNameInput);
  }

}
