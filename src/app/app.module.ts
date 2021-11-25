import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TagComponent } from './components/tag/tag.component';
import { TagsComponent } from './components/tags/tags.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TagComponent,
    TagsComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
