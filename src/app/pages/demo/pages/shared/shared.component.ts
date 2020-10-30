import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {regex, regexErrors} from '@app/shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form22: FormGroup;
  isInline22: boolean;
  regexErrors = regexErrors;
  constructor(private fb: FormBuilder) {
    this.isInline22 = true;
  }

  ngOnInit(): void {
    this.form22 = this.fb.group({
      input: [null, {
                    updateOn: 'blur',
                    validators: [
                             Validators.required,
                             Validators.minLength(3),
                             Validators.pattern(regex.numbers)
                             ]
              }],
      password: [ null, {
                     updateOn: 'blur',
                     validators: [
                       Validators.required,
                     ]
              }]




    })
  }
  onSubmit22(): void {
   console.log('Submit....');
}

  onPatchValue22(): void {
     this.form22.patchValue({input: 'test33'});
  }

  onToggleInline22() {

      this.isInline22 = !this.isInline22;

  }
}
