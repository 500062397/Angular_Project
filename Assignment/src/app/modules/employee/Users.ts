export class Users
{
    id : string;
    employee_name : string;
    employee_salary : string;
    employee_image : string;
    profile_image : string;
   

    constructor(id, employee_name, employee_salary, employee_image, profile_image)
    {
        this.id = id;
        this.employee_name = employee_name;
        this.employee_salary = employee_salary;
        this.employee_image = employee_image;
        this.profile_image = profile_image;
        
    }

}