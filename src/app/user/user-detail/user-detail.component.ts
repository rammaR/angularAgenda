import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Patterns } from 'src/app/models/pattern';
import { User, __CreateUser } from 'src/app/models/user';
import { DepartmentsService } from 'src/app/services/departments.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  form: FormGroup;
  departments: String[];
  url: SafeResourceUrl;
  onEdit: boolean;
  readonly urlPlaceholder: string = "../../../assets/img/avatarPlace.png";

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private serviceDeparment: DepartmentsService,
    private sanitize: DomSanitizer,
    private toastController: ToastController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.getDepartments();
    this.setForm();

    this.onEdit = (this.user?.email && this.user?.email.length > 0) ? true : false;

    this.url = this.user.avatar ? this.user.avatar: this.urlPlaceholder;
  }

  private setForm() {
    if (!this.user.avatar) {
      this.user.avatar = this.urlPlaceholder;
    }

    this.form = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(4)]],
      email: [this.user.email, [Validators.required, Validators.pattern(Patterns.EMAIL)]],
      department: [this.user.department],
      role: [this.user.role],
      secondemail: [this.user.secondEmail, [Validators.pattern(Patterns.EMAIL)]]
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });

    toast.present();
  }

  onSubmit() {
    this.user = this.form.value as User;

    if (!this.user.added) {
      this.user.added = Date();
    }

    this.user.avatar = this.url;

    if (this.onEdit) {
      this.service.put(this.user);
    } else {
      this.service.add(this.user);
    }

    this.presentToast('novo usuário salvo!');
    this.dismiss();
  }

  private getDepartments() {
    this.departments = this.serviceDeparment.get();
  }

  uploadFile($event) {
    var objectURL = window.URL.createObjectURL($event.target.files[0]); // outputs the first file
    //console.log($event.target.files[0]);
    this.url = this.sanitize.bypassSecurityTrustResourceUrl(objectURL);
  }

  cancel() {
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({});
  }

  /*private getParam() {
    let email = this.active.snapshot.params['email'];

    if (email) {
      this.user = this.service.getItem(email);
      if (!this.user) {
        this.presentToast("Não existe usuário com este email");
        this.dismiss();
      }
    } else {
      this.user = __CreateUser();
    }

    this.setForm();
  }*/
}
