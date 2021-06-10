import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeDetails: any ;
  employeeToupdate ={
    employeeId:"",
    empName:"",
    workType:"",
    shift:""
  };
  constructor( private employeeservice:EmployeeService) {
    this.getemployeeDetails();
  }

  ngOnInit(): void {
  }
register(registerForm:NgForm){
 this.employeeservice.registeremployee(registerForm.value).subscribe(
   (resp) =>{
     console.log(resp);
     registerForm.reset();
     this.getemployeeDetails();
   },
   (err) =>{
     console.log(err);
   }
 )
}
   getemployeeDetails(){
     this.employeeservice.getemployee().subscribe(
       (resp) =>{
         console.log(resp);
         this.employeeDetails =resp;
       },
       (err) => {
         console.log(err);
       }
     )
   }
  deleteemployee(employeeId:any){
    console.log(employeeId);
    this.employeeservice.deleteemployee(employeeId).subscribe(
      (resp) => {
        this.getemployeeDetails();
      },
      (err) =>{
        console.log(err);
      }
    );
    
  }
  edit(Employee: any){

    this.employeeToupdate = Employee;

  }
  updateemployee(){
    this.employeeservice.updateemployee(this.employeeToupdate).subscribe(
      (resp) =>{
        console.log(resp);
      },
      (err) =>{
        console.log(err);
      }
    );
  }
}
