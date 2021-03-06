import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartsModule, ThemeService } from 'ng2-charts';


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
import { ComplaintComponent } from './complaint/complaint.component';

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
    DynamicClassDirective,
    ComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    NgbModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfJb-a7LaxigrV-xeA0JDBWlFyXB--5nc',
      libraries: ['places']
    }),
    BrowserAnimationsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
