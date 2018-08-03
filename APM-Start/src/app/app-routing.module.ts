import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'wellcome', component: WelcomeComponent },
      { path: '', redirectTo: 'wellcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'wellcome', pathMatch: 'full' }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
