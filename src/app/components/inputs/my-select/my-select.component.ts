import { Component, Input, OnInit } from '@angular/core';
import { InputvalidatorService } from 'src/app/services/inputvalidator.service';
import { MyAbstractComponent } from '../my-abstract/my-abstract.component';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.scss'],
})
export class MySelectComponent extends MyAbstractComponent {

  @Input() placeholder: string = 'Select one';
  @Input() list: string[] = [];

  constructor(protected validator: InputvalidatorService) {
    super(validator);
  }

  ngOnInit() { 
    super.ngOnInit();
    //console.log("Control Name", this.control.value, "List", this.list)
  }

}
