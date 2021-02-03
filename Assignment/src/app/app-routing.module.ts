import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './modules/login/login.component';
import { EmployeeComponent } from './modules/employee/employee.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
import { EmployeeListViewComponent } from './modules/employee-list-view/employee-list-view.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }] }, {
  path: '',
  component: FullwidthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent},
    {
      path:'employee',
      component: EmployeeComponent,
      canActivate: [AuthGuard] 
    },

    {
      path:'employee/:id',
      component: EmployeeListViewComponent,
      canActivate: [AuthGuard] 
    },
    //wildcard
    { path: '**', redirectTo: '' }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
