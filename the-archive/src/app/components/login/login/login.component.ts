import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

// Import in our config information for openid and okta
import config from 'src/app/config/config';

// Set up our OktaSignIn
declare let OktaSignIn: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Set up our reference to our okta sign in:
  oktaSignin: any;

  // Remember Okta-Angular ^4 must use OktaAuth, not OktaAuthService.
  constructor(@Inject(OKTA_AUTH) private oktaAuthService: OktaAuth) { 
    this.oktaSignin = new OktaSignIn(
      {
        logo: '',
        features: {
          registration: true
        },
        baseUrl: config.issuer.split('/oauth2')[0], // grab everything in the url before oauth
        clientId: config.clientId,
        redirectUri: config.redirectUri,
        authParams: {
          pkce: true, // Remember this is the Proof Key for Code Exchange. We want to use dynamic, not static, secrets.
          issuer: config.issuer,
          scope: config.scopes
        }
      }
    );
  }

  ngOnInit(): void {
    // In this section, we want to clean out any previous elements within our widget.
    this.oktaSignin.remove();

    // Now we want to render our signin widget
    this.oktaSignin.renderEl(
      { el: '#okta-sign-in-widget' }, // the element we want to append to
      (response: any) => {
        if (response.status === 'SUCCESS') { // Here we sign in our user and redirect to our redirect url.
          this.oktaAuthService.signInWithRedirect();
        }
      }, (error: any) => {
        throw error;
      }
    );
  }

}
