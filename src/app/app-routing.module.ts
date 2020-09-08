import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WnLoginComponent } from './wn-login/wn-login.component';
import { WnRegisterComponent } from './wn-register/wn-register.component';
import { WnForgotpasswordComponent } from './wn-forgotpassword/wn-forgotpassword.component';

const routes: Routes = [
  {path: '', component: WnLoginComponent},
  {path: 'register', component: WnRegisterComponent},
  {path: 'fp', component: WnForgotpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
