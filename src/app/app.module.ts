import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TagComponent } from './components/tag/tag.component';
import { TagsComponent } from './components/tags/tags.component';
import { SelectComponent } from './components/select/select.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { AllComponent } from './components/all/all.component';

import { SearchService } from './services/search.service';
import { TagsService } from './services/tags.service';
import { FavesService } from './services/faves.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TagComponent,
    TagsComponent,
    SelectComponent,
    CardComponent,
    CardsComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SearchService,
    TagsService,
    FavesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
