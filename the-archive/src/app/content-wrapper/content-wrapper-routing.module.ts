import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { LoginComponent } from '../components/login/login/login.component';
import { ContentWrapperComponent } from './content-wrapper.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {path: '', component: ContentWrapperComponent,
    children: [
      {path: 'login/callback', component: OktaCallbackComponent}, // Once user is authenticated, they are redirected to our app.
      // Because we are using Okta, we do not have to parse the response and store the OAuth+OIDC tokens.
      {path: 'login', component: LoginComponent},
      {path: ':id', component: MainContentComponent},
      {path: '', component: MainContentComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContentWrapperRoutingModule { }
