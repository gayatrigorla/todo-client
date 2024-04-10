import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SearchBarComponent } from './nav-menu/search-bar/search-bar.component';
import { ListsComponent } from './nav-menu/lists/lists.component';
import { CreateComponent } from './nav-menu/create/create.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListItemComponent } from './nav-menu/lists/list-item/list-item.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { MatCardModule } from '@angular/material/card';
import { NoRecordComponent } from './no-record/no-record.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SublistComponent } from './list-view/sublist/sublist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    SearchBarComponent,
    ListsComponent,
    CreateComponent,
    ListItemComponent,
    HeaderComponent,
    NoRecordComponent,
    ListViewComponent,
    SublistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
