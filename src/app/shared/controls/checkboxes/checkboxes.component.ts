import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ControlItem, Value} from '@app/models/frontend';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true,
    }
  ]
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {
  @Input() items22: ControlItem[];
  @Output() changed = new EventEmitter<Value []>();
  value22: Value[];
  isDisabled22: boolean;
  constructor() { }
  ngOnInit(): void { }

  private propagateChange: any = () => { };

  writeValue(value: Value[]): void {
/*    this.value22 = value;*/
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled22 = isDisabled;
  }

  onChanged22(value: Value, checked: boolean):  void {
    const selected33 = this.getSelected22(value, checked);
    console.log(selected33);
    this.value22 = selected33;
    this.propagateChange(selected33);
    this.changed.emit(selected33);
  }

  private getSelected22(value: Value, checked: boolean ): Value[] {
    const selected: Value[] = this.value22 ? [...this.value22] : [];
//  console.log(this.value22);
//  console.log(selected);

    if(checked) {
       if(!selected.includes(value)){
          selected.push(value);
       }
    }else {
      const index = selected.indexOf(value);
      selected.splice(index,1);
    }

    return selected.length ? selected: null;
  }

  isChecked22(value: Value): boolean {
    return this.value22 && this.value22.includes(value);
  }

}
