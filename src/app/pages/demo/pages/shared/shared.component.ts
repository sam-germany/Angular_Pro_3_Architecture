import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form22: FormGroup;
  isInline22: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form22 = this.fb.group({
      input22: [null, {
                    updateOn: 'blur',
                    validators: [
                             Validators.required,
                             Validators.minLength(3)
                             ]
                }]
    })
  }
  onSubmit22(): void {
   console.log('Submit....');
}

  onPatchValue22(): void {
     this.form22.patchValue({input22: 'test33'});
  }

  onToggleInline22() {

      this.isInline22 = !this.isInline22;

  }
}
