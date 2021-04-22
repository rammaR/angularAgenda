import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor() { }

  get(): string[] {
    return ['IT', 'Infrastructure', 'Human Resourcers', 'Managment', 'Others'];
  }
}
