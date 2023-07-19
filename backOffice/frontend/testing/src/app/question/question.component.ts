import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  'title': 'Question';
  constructor(private router: Router, private shared: SharedService) {}

  ngOnInit(): void {
    this.shared.setFormVar(this.question, this.range);
  }
  goToPage(pageName: String): void {
    console.log(this.question.value, this.range.value);
    this.router.navigate([`${pageName}`]);
  }

  question = new FormGroup({
    Title: new FormControl('', Validators.required),
    path: new FormControl('', Validators.required),
  });

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  get Title() {
    return this.question.get('Title');
  }
  get path() {
    return this.question.get('path');
  }
  get dateOfCommencement() {
    return this.range.get('start');
  }
  get dateOfAdjournment() {
    return this.range.get('end');
  }
}
