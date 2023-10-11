import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { PagesComponent } from './components/pages/pages.component';
import { TempleComponent } from './components/pages/temple/temple.component';
import { DonationsComponent } from './components/pages/donations/donations.component';
import { SpComponent } from './components/pages/sp/sp.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './components/pages/signup/signup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoggedinComponent } from './components/pages/loggedin/loggedin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/pages/admin/admin.component';
import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { ClassesComponent } from './components/pages/admin/classes/classes.component';
import { EventsComponent } from './components/pages/admin/events/events.component';
import { SettingsComponent } from './components/pages/admin/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    PagesComponent,
    TempleComponent,
    DonationsComponent,
    SpComponent,
    SignupComponent,
    LoggedinComponent,
    AdminComponent,
    DashboardComponent,
    ClassesComponent,
    EventsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
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
      {
        path:'loggedin',
        component:LoggedinComponent
      },
      {
        path:'signup',
        component:SignupComponent
      },
      {
        path:'admin',
        component:AdminComponent
      },
      {
        path:'admin/dashboards',
        component:DashboardComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
