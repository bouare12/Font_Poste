import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

/** Locale Imports */
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

/** Registering Locale */
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
