import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { User, __CreateUser } from 'src/app/models/user';
import { DepartmentsService } from 'src/app/services/departments.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  form: FormGroup;
  user: User;
  departments: String[];
  url: SafeResourceUrl;
  @ViewChild("#filer") filer: ElementRef;
  readonly urlPlaceholder: string = "../../../assets/img/avatarPlace.png";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: UserService,
    private active: ActivatedRoute,
    private serviceDeparment: DepartmentsService,
    private sanitize: DomSanitizer
  ) { }

  ngOnInit() {
    this.getParam();
    this.getDepartments();
  }

  private setForm() {
    if (!this.user.avatar) {
      this.user.avatar = this.urlPlaceholder;
    }

    this.form = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(4)]],
      email: [this.user.email, [Validators.required]],
      department: [this.user.department],
      role: [this.user.role],
      secondemail: [this.user.secondEmail]
    });
  }

  private getParam() {
    let email = this.active.snapshot.params['email'];

    if (email) {
      this.user = this.service.getItem(email);
      if (!this.user) {
        this.router.navigate(['user'])
      }
    } else {
      this.user = __CreateUser();
    }

    this.setForm();
  }

  onSubmit() {
    if (!this.user.added) {
      this.user.added = Date();
    }
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  private getDepartments() {
    this.departments = this.serviceDeparment.get();
  }

  uploadFile($event) {
    var objectURL = window.URL.createObjectURL($event.target.files[0]); // outputs the first file
    this.url = this.sanitize.bypassSecurityTrustResourceUrl(objectURL);
  }

  cancel(){
    this.router.navigate([''])
  }
}
