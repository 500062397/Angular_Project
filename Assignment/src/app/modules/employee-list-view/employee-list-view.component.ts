import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../employee/rest.service';
@Component({
  selector: 'cf-employee-list-view',
  templateUrl: './employee-list-view.component.html',
  styleUrls: ['./employee-list-view.component.scss']
})
export class EmployeeListViewComponent implements OnInit {
    emp_id: number;
    employeeDetails: any;
    error: any;
    getResponse: boolean=false;

    constructor(private restService : RestService,private route:ActivatedRoute,
        private router:Router){

        this.route.params.subscribe((params)=>{
            console.log(params,'asdasdas')
            if(params.id){
                this.emp_id=params.id
                this.getEmployeeDetailsView(this.emp_id)
            }
            else{
                this.router.navigateByUrl('/employee')
            }
        })
    }

    ngOnInit(): void {
        
    }


    getEmployeeDetailsView(id){
        this.restService.getEmployeeDetails(id).subscribe((response:any)=>{
            console.log(response,'asdasd')
            if(response.status=="success"){
                this.employeeDetails=response.data
                console.log(this.employeeDetails.employee_age,'asdsadas')
                this.error=''
                this.getResponse=true
            }
            else{
                //to be handle
                console.log(response.message)
                this.getResponse=false
                this.error=response.message
            }
        },error=>{
            console.log(error.message)
            this.getResponse=false
            this.error=error.message
        })
    }
}