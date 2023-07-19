// ------------------------------------
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { HttpClient } from '@angular/common/http';

// ------------------------------------

// ------------------------------------
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
// ------------------------------------

// ------------------------------------
export class InputComponent implements OnInit {
  // ------------------------------------
  'title': 'Input';
  // ------------------------------------

  // ------------------------------------
  information!: FormGroup;
  date!: FormGroup;
  // ------------------------------------

  // ------------------------------------
  question_type: string[] = [
    'Radio',
    'Check-box',
    'Drop-down',
    'Short-Answer',
    'Detail-Answer',
    'Input',
    'Slider',
  ];

  questionArray: Array<any> = [];
  value: String = 'Typing';
  // ------------------------------------

  // ------------------------------------
  questions = new FormControl(this.questionArray);
  // ------------------------------------

  file_path = new FormGroup({ path: new FormControl('') });

  // ------------------------------------
  input = new FormGroup({
    Type: new FormControl('', Validators.required),
    label: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    descriptions: new FormControl('', Validators.required),
    options: new FormControl(
      'No Options Required in case of openfields',
      Validators.required
    ),
  });
  // ------------------------------------

  // ------------------------------------
  constructor(
    private router: Router,
    private http: HttpClient,
    private shared: SharedService
  ) {}
  // ------------------------------------

  // ------------------------------------
  ngOnInit(): void {
    this.information = this.shared.getFormVarInfo();
    this.date = this.shared.getFormVarDate();
  }
  // ------------------------------------

  // ------------------------------------
  goToPage(pageName: String): void {
    // console.log(this.input.value);
    this.router.navigate([`${pageName}`]);
  }
  // ------------------------------------

  // ------------------------------------
  onSubmit() {
    // console.log(this.information.value, this.date.value);
    // console.log('this.questions.value', this.questions.value);
    this.http
      .post('http://localhost:3000/backOffice', {
        date: this.date.value,
        information: this.information.value,
        questions: this.questions.value,
      })
      .subscribe((response) => {
        console.log(response);
        this.date.reset();
        this.information.reset();
        this.questions.reset();
        window.location.reload();
      });
  }
  // ------------------------------------

  // ------------------------------------
  addquestion(): void {
    // console.log(this.file_path.value);
    if (
      this.Type?.value === 'Short-Answer' ||
      this.Type?.value === 'Detail-Answer' ||
      this.Type?.value === 'Input'
    ) {
      this.options?.reset();
    }
    alert(`Question submitted, successfully !`);
    this.questions.setValue(
      this.questions.value?.concat([this.input.value]) || null
    );
    this.input.reset();
  }
  // ------------------------------------

  processpath(): void {
    // console.log(this.path?.value);
    this.http
      .post('http://localhost:3000/questionArray', {
        path: this.path?.value,
      })
      .subscribe((response: any) => {
        // console.log(response);
        this.questions.setValue(response);
      });
  }

  // ------------------------------------
  get Type() {
    return this.input.get('Type');
  }
  get label() {
    return this.input.get('label');
  }
  get id() {
    return this.input.get('id');
  }
  get descriptions() {
    return this.input.get('descriptions');
  }
  get options() {
    return this.input.get('options');
  }
  get path() {
    return this.file_path.get('path');
  }
  // ------------------------------------
}
