import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputModule} from './input/input.module';
import {FormFieldModule} from '@app/shared/controls/form-field/form-field.module';
import {PasswordModule} from '@app/shared/controls/password/password.module';
import {SelectModule} from '@app/shared/controls/select/select.module';
import {CheckboxesModule} from '@app/shared/controls/checkboxes/checkboxes.module';
import {RadiosModule} from '@app/shared/controls/radios/radios.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule
  ],
  exports: [
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule
  ]
})
export class ControlsModule { }
