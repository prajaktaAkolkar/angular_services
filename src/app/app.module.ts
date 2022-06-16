import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { FootwareComponent } from './footware/footware.component';
import { ClothComponent } from './cloth/cloth.component';
import { FurnitureComponent } from './furniture/furniture.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ElectronicComponent,
    FootwareComponent,
    ClothComponent,
    FurnitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
