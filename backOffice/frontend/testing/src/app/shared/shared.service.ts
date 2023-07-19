import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  information!: FormGroup;
  date!: FormGroup
  constructor() { }
  setFormVar(question: FormGroup, range: FormGroup) {
    this.information = question;
    this.date = range;
  }
  getFormVarInfo() {
    return this.information;
  }
  getFormVarDate() {
    return this.date;
  }
}
