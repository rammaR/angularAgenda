import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InputvalidatorService {

  constructor() { }

  hasErrorValidar(control: AbstractControl, error: string): boolean {
    if ((control.dirty || control.dirty) && this.hasError(control, error)) {
      return true;
    }

    return false;
  }

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }

  lengthError(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }

}
