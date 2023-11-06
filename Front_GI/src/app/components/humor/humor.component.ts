import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Humor } from 'src/app/models/humor';
import { HumorService } from 'src/app/services/humor.service';

@Component({
  selector: 'app-humor',
  templateUrl: './humor.component.html',
  styleUrls: ['./humor.component.css']
})
export class HumorComponent implements OnInit {
  formHumor!: FormGroup;

  ngOnInit(): void {
    this.formHumor = this.formBuilder.group({
      rating: this.formBuilder.control('5'),
      humor: this.formBuilder.control('')
    });
  }
  constructor(private formBuilder: FormBuilder,private humorService: HumorService,private router: Router) {}

  handleHumor() {
    let rate=this.formHumor.value.rating;
    let humor=this.formHumor.value.humor;
    let modelhumor:Humor={rate:rate,humor:humor};
    console.log(modelhumor);
    this.humorService.addHumor(modelhumor).subscribe({
      next : data => {
        console
      }, error :err => {
        console.log(err);
      }
    });
    this.router.navigateByUrl('/');
    
  }
}