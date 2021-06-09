import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { HighchartsChartModule } from 'highcharts-angular';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './toast/toast.component';
import { DynamicClassDirective } from './customDirective';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    MainpageComponent,
    LoginPageComponent,
    DashboardComponent,
    FooterComponent,
    LandingComponent,
    NotificationsComponent,
    ToastComponent,
    DynamicClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDqgTqghMT9TnKMPOJt-4wAEgGcoUgMKE8',
      libraries: ['places']
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
