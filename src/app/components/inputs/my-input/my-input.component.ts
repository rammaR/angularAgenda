import { Component } from '@angular/core';
import { InputvalidatorService } from 'src/app/services/inputvalidator.service';
import { MyAbstractComponent } from '../my-abstract/my-abstract.component';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
})
export class MyInputComponent extends MyAbstractComponent {

  constructor(private validator: InputvalidatorService) {
    super();
  }

}
