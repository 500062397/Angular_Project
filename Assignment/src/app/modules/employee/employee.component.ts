import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';
@Component({
  selector: 'cf-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private rs : RestService){}

  columns = ["User Id", "Employee Name", "Employee Salary", "Age", "Details"];

  index = ["id", "employee_name", "employee_salary", "employee_age", "profile_image"];

  users : Users[] = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.users = response;
        console.log("Thus",this.users)
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }

}
