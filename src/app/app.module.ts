import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { CoMarketingComponent } from './components/co-marketing/co-marketing.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AdvertiesComponent } from './components/adverties/adverties.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { SellComponent } from './components/sell/sell.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutusComponent,
    PrivacypolicyComponent,
    CoMarketingComponent,
    PartnersComponent,
    AdvertiesComponent,
    ContactUsComponent,
    HelpPageComponent,
    SellComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
