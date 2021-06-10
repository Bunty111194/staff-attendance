import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { officeboyComponent } from './officeboy/officeboy.component';
import{BoardUserComponent} from './user-information/user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { EmployeeComponent } from './employee/employee.component';
import { CalendarviewComponent } from './calendarview/calendarview.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    officeboyComponent,
    BoardUserComponent,
    MarkAttendanceComponent,
    EmployeeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    FullCalendarModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  
   
  ],
  
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
