import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { LoginComponent } from '../components/login/login/login.component';
import { SiteManagerComponent } from '../ui-builder/site-manager/site-manager.component';
import { UiBuilderComponent } from '../ui-builder/ui-builder.component';
import { ContentWrapperComponent } from './content-wrapper.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {path: '', component: ContentWrapperComponent,
    children: [
      {path: 'dashboard', loadChildren: () => import('../ui-builder/ui-builder.module').then(m => m.UiBuilderModule)},
      {path: 'section/:id', component: MainContentComponent},
      {path: 'course/:id', component: MainContentComponent},
      {path: 'login', component: LoginComponent},
      {path: 'login/callback', component: OktaCallbackComponent}, // Once user is authenticated, they are redirected to our app.
      {path: '', redirectTo: 'section/', pathMatch: 'full'}
    ]
  },
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
