import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormGroup } from '@angular/forms';
import { InputvalidatorService } from 'src/app/services/inputvalidator.service';

@Component({ template: '' })
export class MyAbstractComponent implements OnInit {

  @Input() label: string = '';
  @Input() controlName: string;
  @Input() form: FormGroup;
  @Input() type: string = 'text';

  constructor(protected validator: InputvalidatorService) { }

  ngOnInit() { }

  get control(): AbstractControl {
    return this.form.get(this.controlName);
  }

}