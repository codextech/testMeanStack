import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutModule } from './layout/dashboard-layout/dashboard-layout.module';
import { LandingLayoutModule } from './layout/landing-layout/landing-layout.module';
import { AuthLayoutModule } from './layout/auth-layout/auth-layout.module';
import { ApiInterceptor } from './_interceptor/api-interceptor';
import { DashboardSharedUIModule } from './dashboard/shared-ui/dashboard-shared-ui.module';
import { HomeSharedUIModule } from './home/shared-ui/home-shared-ui.module';
import { DashbaordModule } from './dashboard/dashbaord.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { ApiService } from './_services/api.service';
import { AuthService } from './_services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Core
    HomeModule,
    DashbaordModule,
    AuthModule,
    // Layout
    DashboardLayoutModule,
    LandingLayoutModule,
    AuthLayoutModule,
    // Shared
    DashboardSharedUIModule,
    HomeSharedUIModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
    ApiService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
