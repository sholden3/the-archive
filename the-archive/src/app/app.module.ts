import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs'
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import config from './config/config';
import { Router } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaConfig = Object.assign({
  onAuthRequired: (injector: any) => {
    const router = injector.get(Router);

    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, config);

const oktaAuth = new OktaAuth(oktaConfig)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighlightModule,
    HttpClientModule,
    OktaAuthModule
  ],
  providers: [
    {
      provide: OKTA_CONFIG,
      useValue: {oktaAuth}
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
          bash: () => import('highlight.js/lib/languages/bash'),
          c: () => import('highlight.js/lib/languages/c'),
          cpp: () => import('highlight.js/lib/languages/cpp'),
          java: () => import('highlight.js/lib/languages/java'),
          json: () => import('highlight.js/lib/languages/json'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          python: () => import('highlight.js/lib/languages/python')
        },
        themePath: 'assets/styles/an-old-hope.css'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
