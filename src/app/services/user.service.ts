import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarios: BehaviorSubject<User[]>;

  constructor() {
    this.usuarios = new BehaviorSubject([{
      added: Date(),
      email: 'ggustavorodrigocauadrumond@camarasjc.sp.gov.br',
      name: 'Gustavo Rodrigo Cauã Drumond',
      avatar: '',
      department: 'TI',
      role: 'programador',
      secondEmail: ''
    },
    {
      added: Date(),
      email: 'ooliverotavioporto@iblojas.com.br',
      name: 'Oliver Otávio Porto',
      avatar: '',
      department: 'RH',
      role: 'estagiário',
      secondEmail: 'ooliverotavioporto@gmail.com'
    }]);
  }

  get(): Observable<User[]> {
    return this.usuarios.asObservable();
  }

  getItem(email: string): User {
    return this.usuarios.value.find(v => {
      return v.email = email;
    })
  }

  delete(user: User) {
    this.usuarios.value.splice(this.usuarios.value.findIndex(v => v.email === user.email), 1);
  }
}
