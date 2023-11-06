import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Break } from 'src/app/models/break';
import { BreakService } from 'src/app/services/break.service';

@Component({
  selector: 'app-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.css']
})
export class BreakComponent implements OnInit {

  // Define the todayDate variable with today's date
  todayDate: string;

  breaks!: Break[];

  breakForm: FormGroup;

  constructor(private breakService: BreakService,
              private fb: FormBuilder) {

                // Calculate today's date and set it as the default value
                const today = new Date();
                const year = today.getFullYear();
                const month = String(today.getMonth() + 1).padStart(2, '0');
                const day = String(today.getDate()).padStart(2, '0');
                this.todayDate = `${year}-${month}-${day}`;

                this.breakForm = this.fb.group({
                  date: [this.todayDate, Validators.required],
                  start: ['', Validators.required],
                  end: ['', Validators.required]
                });
  }

  ngOnInit(): void {
    this.loadBreaks();
  }

  loadBreaks() {
    this.breakService.getBreaks().subscribe(
      data => {this.breaks = data},
      error => {console.log(error);}
    );
  }

  addBreak() {
    const breakInstance  = this.breakForm.value;
    this.breakService.addBreak(breakInstance).subscribe(
      res => {
        this.loadBreaks();
      }
    );
  }
  
}
