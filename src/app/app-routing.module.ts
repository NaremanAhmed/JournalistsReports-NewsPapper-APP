import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SginupComponent } from './views/sginup/sginup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'/sginup',component:SginupComponent},
  {path:'/profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
