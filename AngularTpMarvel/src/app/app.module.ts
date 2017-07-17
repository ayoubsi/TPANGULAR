import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FavorisOptionComponent } from './api/favoris-option/favoris-option.component';
import { CharacterComponent } from './api/character/character.component';
import { SearchFormComponent } from './api/search-form/search-form.component';
import { HomeComponent } from './home/home.component';
import { CharacterDataComponent } from './character-data/character-data.component';
import {Search} from './api/http-service/search';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'data', component: CharacterDataComponent},
  {path: 'about', component: AboutUsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FavorisOptionComponent,
    CharacterComponent,
    SearchFormComponent,
    HomeComponent,
    CharacterDataComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [Search],
  bootstrap: [AppComponent]
})
export class AppModule { }
