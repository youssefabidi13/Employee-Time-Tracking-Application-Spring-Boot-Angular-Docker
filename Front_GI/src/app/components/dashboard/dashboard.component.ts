import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Humor } from 'src/app/models/humor';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  employeeCount: number = 0;
  HPcount: number = 0;
  HNcount: number = 0;
  employeeList: Employee[] = [];
  humors: Humor[] = [];
    constructor(private dashboardService: DashboardService) { }

    ngOnInit(): void {
      this.getEmployeeCount();
      this.getEmployee();
      this.countAllHumorsNegative();
      this.countAllHumorsPositive();
      this.getHumors();
    }
    getHumors() {
      this.dashboardService.listHumors().subscribe(
        res => {
          this.humors = res;
        }
      )
    }
    getEmployeeCount() {
      this.dashboardService.getEmployeeCount().subscribe(
        res => {
          this.employeeCount = res;
        }
      )
  
    }
    getEmployee() {
      this.dashboardService.getEmployee().subscribe(
        res => {
          this.employeeList=res;
        }
      )
    }
    countAllHumorsNegative() {
      this.dashboardService.countAllHumorsNegative().subscribe(
        res => {
          this.HNcount = res;
        }
      )
    }
    countAllHumorsPositive() {
      this.dashboardService.countAllHumorsPositive().subscribe(
        res => {
          this.HPcount = res;
        }
      )
    }
}
