import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

type PasswordType = 'password' | 'text';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ]
})
export class PasswordComponent implements OnInit , ControlValueAccessor{

  @Input() placeholder33: string;
  @Output() changed33 = new EventEmitter<string>();
  value33: string;
  isDisabled33: boolean;
  passwordType33: PasswordType;

  constructor() {
    this.passwordType33 = 'password';
  }

  ngOnInit(): void {}

  private propagateChange: any = () => { };
  private propagateTouched: any = () => { };


  writeValue(value: string): void {
     this.value33 = value;
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
      this.isDisabled33 = isDisabled;
  }

  onKeyup33(value: string): void {
      this.value33 = value;
      this.propagateChange(value);
      this.changed33.emit(value);
  }

  onBlur33(): void {
      this.propagateTouched();
  }

  togglePassword(): void {
    this.passwordType33 = this.passwordType33 === 'password' ? 'text' : 'password';
  }

}
