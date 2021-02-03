import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FullwidthComponent } from './fullwidth.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { EmployeeComponent } from 'src/app/modules/employee/employee.component';
import { EmployeeListViewComponent } from 'src/app/modules/employee-list-view/employee-list-view.component';

@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,
    EmployeeComponent,
    EmployeeListViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class FullwidthModule { }
