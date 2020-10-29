import {Component, Input, OnInit} from '@angular/core';
export type ButtonType = 'button' | 'submit';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type22: ButtonType;

  constructor() {
    this.type22 = 'button';
  }

  ngOnInit(): void {
  }

}
