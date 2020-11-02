import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatSelectChange} from '@angular/material/select';

import { ControlItem, Value} from '@app/models/frontend';
export {ControlItem, Value} from '@app/models/frontend';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() items: ControlItem[];
  @Input() placeholder: string;
  @Output() changed = new EventEmitter<Value>();
  value22: Value;
  isDisabled22: boolean;

  constructor() { }

  ngOnInit(): void {}
  private propagateChange: any = () =>  {};
  private propagateTouched: any = () =>  {};

  writeValue(value: Value): void {
    this.value22 = value;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled22 = isDisabled;
  }

  onChanged22(event: MatSelectChange): void {
   const value33 = event.value ? event.value : null;
   this.value22 = value33;
   this.propagateChange(value33);
   this.changed.emit(value33);
  }
  onBlur22() {
    this.propagateTouched();
  }


}
