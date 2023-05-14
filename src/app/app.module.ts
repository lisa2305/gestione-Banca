import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BancaComponent } from './prodotti/home-prodotti.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BancaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
