import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentWrapperComponent } from './content-wrapper.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {path: '', component: ContentWrapperComponent,
    children: [
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
