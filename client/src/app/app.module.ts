import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DefaultModule } from './pages/default/default.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './helpers/auth.guard';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JWTInterceptor } from './helpers/jwt.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartComponent } from './pages/start/start.component';
import { ContentComponent } from './components/content/content.component';
import { ItemComponent } from './components/item/item.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    StartComponent,
    ContentComponent,
    ItemComponent,
    ProfileComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DefaultModule,
    MatToolbarModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
