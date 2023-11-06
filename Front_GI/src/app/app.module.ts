import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkingDayComponent } from './components/working-day/working-day.component';
import { AppInterceptorInterceptor } from './interceptors/app-interceptor.interceptor';
import { HumorComponent } from './components/humor/humor.component';
import { BreakComponent } from './components/break/break.component';
import { TimePipe } from './time.pipe';
import { WorkComponent } from './components/work/work.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkingDayComponent,
    HumorComponent,
    BreakComponent,
    TimePipe,
    WorkComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : AppInterceptorInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
