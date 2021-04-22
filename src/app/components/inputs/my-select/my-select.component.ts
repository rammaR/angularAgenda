import { Component, Input, OnInit } from '@angular/core';
import { MyAbstractComponent } from '../my-abstract/my-abstract.component';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.scss'],
})
export class MySelectComponent extends MyAbstractComponent {

  @Input() placeholder: string = 'Select one';
  @Input() list: any[] = [];

  constructor() {
    super();
  }

  ngOnInit() { }

}
