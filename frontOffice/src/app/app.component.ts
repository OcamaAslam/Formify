import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  objID!: String;
  forms!: any;
  Form: FormGroup = new FormGroup({});
  title = '';

  constructor(private titleService: Title, private http: HttpClient) {}
  ngOnInit() {
    this.objID = '6312d3d6b015ad66a5243d4c';
    this.http
      .get('http://localhost:3000/frontOffice/' + this.objID)
      .subscribe((response) => {
        console.log(response);

        this.forms = response;
        this.titleService.setTitle(this.forms.title);

        for (var x of this.forms.question) {
          if (x.Type == 'Slider') {
            x.options = x.options.split('-');
          } else {
            x.options = x.options.split(',');
          }

          if (x.Type == 'Check-box') {
            let cbArray: Array<any> = [];

            this.Form.addControl(x.id, new FormControl(cbArray));
          } else {
            this.Form.addControl(
              x.id,
              new FormControl('', Validators.required)
            );

            if (x.Type == 'Short-Answer' || x.Type == 'Detail-Answer') {
              x.Type == 'Short-Answer'
                ? this.Form.controls[x.id].setValidators(
                    Validators.maxLength(250)
                  )
                : this.Form.controls[x.id].setValidators(
                    Validators.maxLength(1000)
                  );

              this.Form.controls[x.id].updateValueAndValidity();
            }
          }
        }
      });
  }

  // ----------------------------------------------------

  toggleItem(event: any, question: any, value: any) {
    console.log(question, event, value);

    // let checkBoxArray = this.Form.get(question.id)?.value;
    let updatedCBArray = [];

    if (event.checked) {
      updatedCBArray = this.Form.get(question.id)?.value.concat(value);
    } else {
      console.log(this.Form.get(question.id));
      updatedCBArray = this.Form.get(question.id)?.value.filter(
        (Value1: any) => Value1 != value
      );
    }
    this.Form.get(question.id)?.setValue(updatedCBArray);
  }
  // ----------------------------------------------------
  // ----------------------------------------------------

  // ----------------------------------------------------

  onSubmit() {
    console.log(this.Form.value);
    this.http
      .post('http://localhost:3000/frontOffice', {
        Form: this.Form.value,
      })
      .subscribe((response) => {
        console.log(response);
      });
    window.location.reload();
  }
}
