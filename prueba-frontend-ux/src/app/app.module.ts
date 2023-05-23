import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner.component';
import { OffersComponent } from './home/offers.component';
import { BannerCardComponent } from './home/bannerCard.component';
import { FooterComponent } from './footer/footer.component';
import { Header } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    BannerComponent,
    OffersComponent,
    BannerCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
