import {Component, OnInit, Input} from '@angular/core';

import {Search} from '../api/http-service/search';

@Component({
  selector: 'app-character-data',
  templateUrl: './character-data.component.html',
  styleUrls: ['./character-data.component.css']
})
export class CharacterDataComponent implements OnInit {
  heroes: Array<Object>;
  favoris: Array<string> = [];

  constructor(private searchService: Search) {
  }

  ngOnInit() {
    const storageNames = JSON.parse(localStorage.getItem('favoris'));
    for (let i = 0; i < storageNames.length; i++) {
      this.favoris.push(storageNames[i]);
    }
  }

  onHeroesSearch(charName: string) {
    this.searchService.getChar(charName).subscribe(data => this.heroes = data);
  }

  onAddFavoris(charNameForFav: string) {
    this.favoris.push(charNameForFav);
    localStorage.setItem('favoris', JSON.stringify(this.favoris));
  }

}
