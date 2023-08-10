import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { PagesComponent } from './components/pages/pages.component';
import { TempleComponent } from './components/pages/temple/temple.component';
import { DonationsComponent } from './components/pages/donations/donations.component';
import { SpComponent } from './components/pages/sp/sp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    PagesComponent,
    TempleComponent,
    DonationsComponent,
    SpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'aboutus',
        component:AboutusComponent
      },
      {
        path: 'sp',
        component:SpComponent },
      {
        path:'temple',
        component:TempleComponent
      },
      {
        path:'donations',
        component:DonationsComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
