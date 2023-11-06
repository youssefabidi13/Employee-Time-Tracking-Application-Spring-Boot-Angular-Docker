import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-working-day',
  templateUrl: './working-day.component.html',
  styleUrls: ['./working-day.component.css']
})
export class WorkingDayComponent {
  constructor(public authService: AuthService , private router: Router) { }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }

  isWorking: boolean = false;
  isOnBreak: boolean = false;

  toggleWork() {
    if (!this.isWorking && !this.isOnBreak) {
      this.startWork();
    } else if (this.isWorking && !this.isOnBreak) {
      this.addBreak();
    } else {
      this.resumeWork();
    }
  }

  startWork() {
    this.isWorking = true;
  }

  addBreak() {
    this.isOnBreak = true;
  }

  resumeWork() {
    this.isOnBreak = false;
  }

  endWork() {
    this.isWorking = false;
    this.isOnBreak = false;
  }

}
