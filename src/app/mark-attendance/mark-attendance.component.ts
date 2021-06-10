import { Component, OnInit } from '@angular/core';
import { CheckinService } from '../checkin.service';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent implements OnInit {

  constructor(private checkinservice:CheckinService) { }
  
  register(registerForm: any)
  {
   this.checkinservice.checkin(registerForm.value).subscribe(
     (resp) =>{
       console.log(resp);
     },
     (err)=> {
       console.log(err);
     }
   );
  }
  

  ngOnInit(): void {
  }
  

}
