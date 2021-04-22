import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({ template: '' })
export class MyAbstractComponent implements OnInit {

  @Input() label: string = '';
  @Input() controlName: string;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() { }

  get control(): AbstractControl {
    return this.form.get(this.controlName);
  }

}