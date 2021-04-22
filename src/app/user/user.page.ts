import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  list: User[];
  filter: string;

  constructor(
    private service: UserService,
    private router: Router) { }

  ngOnInit() {
    this.getList();
  }

  private getList() {
    this.service.get().subscribe(
      (l: User[]) => {
        this.list = l;
      }
    );
  }

  getListFiltered() {
    if (!this.filter)
      return this.list;

    return this.list.filter(v => {
      return v.name.includes(this.filter) ||
        v.email.includes(this.filter) ||
        v.secondEmail.includes(this.filter) ||
        v.department.includes(this.filter) ||
        v.role.includes(this.filter)
    })
  }

  delete(u: User) {
    this.service.delete(u);
  }

  add() {
    this.router.navigate(['insert']);
  }
}
