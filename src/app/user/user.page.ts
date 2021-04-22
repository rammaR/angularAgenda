import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User, __CreateUser } from '../models/user';
import { UserService } from '../services/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

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
    private modalController: ModalController) { }

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

  view(u: User) {
    this.presentModal(u);
  }

  add() {
    this.presentModal();
  }

  async presentModal(u?: User) {
    const modal = await this.modalController.create({
      component: UserDetailComponent,
      cssClass: 'my-custom-modal',
      componentProps: {
        'user': u ? u : __CreateUser()
      }
    });

    await modal.present();
  }
}
