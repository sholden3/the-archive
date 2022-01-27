import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentWrapperComponent } from './content-wrapper.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {path: '', component: ContentWrapperComponent,
    children: [
      {path: '', component: MainContentComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class ContentWrapperRoutingModule { }
