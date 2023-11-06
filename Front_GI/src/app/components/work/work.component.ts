import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Work } from 'src/app/models/work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  currentWorkId: number | null = null;

  works!: Work[];

  workForm: FormGroup;

  // Define the todayDate variable with today's date
  todayDate: string;
  isWorkCreated?: boolean;
  isWorkStarted?: boolean;
  isPageAccessible?: boolean;
  inaccessibleMessage?: string;

  constructor(private workService: WorkService,
              private fb: FormBuilder,private router: Router) {

                // Calculate today's date and set it as the default value
                const today = new Date();
                const year = today.getFullYear();
                const month = String(today.getMonth() + 1).padStart(2, '0');
                const day = String(today.getDate()).padStart(2, '0');
                this.todayDate = `${year}-${month}-${day}`;
                
                this.workForm = this.fb.group({
                  date: [this.todayDate, Validators.required],
                  start: ['', Validators.required],
                  end: ['', Validators.required]
                });
              }

  ngOnInit(): void {
    this.loadWorks();
    this.workService.getWorkStatus().subscribe(
      res => {
        this.isWorkStarted=res;
        console.log(this.isWorkStarted);
      }
    )
    this.workService.getWorkExist().subscribe(
      res => {
        this.isWorkCreated=res;
        console.log(this.isWorkCreated);
      }
    )
    
  }

  loadWorks() {
    this.workService.getWorks().subscribe(
      data => {this.works = data},
      error => {console.log(error);}
    );
  }

  addWork() {
    const work = this.workForm.value;
    this.workService.addWork(work).subscribe(
      res => {
        this.loadWorks();
      }
    );
  }
  toggleWork() {
    if (this.isWorkStarted) {
      // End work
      //this.workForm.get("end")?.setValue(new Date().toLocaleTimeString()); // Set end time as the current time
        this.workService.endWork().subscribe({

        });
        this.router.navigateByUrl("/");
        
    } else {
      // Start work
      this.workService.createWork(this.workForm.value).subscribe((createdWorkId) => {
        this.currentWorkId = createdWorkId;
        this.workForm.get("start")?.setValue(new Date().toLocaleTimeString()); // Set start time as the current time
      });
    }
    this.router.navigateByUrl("/");
  }
  
}