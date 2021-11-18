import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './composants/menu/menu.component';
import { ErrorComponent } from './composants/error/error.component';
import { HomeComponent } from './composants/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
