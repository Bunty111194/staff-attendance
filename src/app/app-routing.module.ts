import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import{BoardUserComponent} from './user-information/user.component';
import { officeboyComponent } from './officeboy/officeboy.component';
import { AdminComponent } from './admin/admin.component';
import{MarkAttendanceComponent} from './mark-attendance/mark-attendance.component';
import{CalendarviewComponent} from './calendarview/calendarview.component';
import { EmployeeComponent } from './employee/employee.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mark-attendance', component: MarkAttendanceComponent },
  {path:'calendar', component:CalendarviewComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'userinformation', component:BoardUserComponent},
  { path: 'officeboy', component: officeboyComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'employee', component: EmployeeComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
