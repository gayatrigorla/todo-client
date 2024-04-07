import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SearchBarComponent } from './nav-menu/search-bar/search-bar.component';
import { ListsComponent } from './nav-menu/lists/lists.component';
import { CreateComponent } from './nav-menu/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SearchBarComponent,
    ListsComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
