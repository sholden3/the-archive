import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { OktaAuthStateService } from '@okta/okta-angular';
import { SiteStateService } from 'src/app/services/site-state/site-state.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: string = "";
  state: string = "";

  constructor(
    @Inject(OKTA_AUTH) private oktaAuthService: OktaAuth,
    private authStateService: OktaAuthStateService,
    private siteState: SiteStateService
    ) { }

  ngOnInit(): void {
    // subscribe to authentication state changes on oktaAuthService
    this.siteState.getState().subscribe(
      (state) => {
        this.state = state;
      }
    )
    this.authStateService.authState$.subscribe(
      (result: any) => {
        this.isAuthenticated = result.isAuthenticated;
        this.getUserDetails();
      }
    )
  }

  getUserDetails() {
    if(this.isAuthenticated) {
      // fetch the logged in user details (user's claims)
      // user full name is exposed as a property name
      this.oktaAuthService.getUser().then(
        (res) => {
          console.log(res);
          this.userFullName = res.name!;
        }
      )
    }
  }

  logout() {
    // Terminates the session with Okta and removes current tokens.
    this.oktaAuthService.signOut();
  }

}
