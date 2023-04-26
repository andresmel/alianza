import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementComponent } from './element/element.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"Dashboard",component:DashboardComponent},
  {path:"Element/:id",component:ElementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
