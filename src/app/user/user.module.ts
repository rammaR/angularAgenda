import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { UserCardComponent } from './user-card/user-card.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MyInputsModule } from '../components/inputs/inputs.module';
import { MyInputComponent } from '../components/inputs/my-input/my-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    ReactiveFormsModule,
    MyInputsModule
  ],
  declarations: [
    UserPage,
    UserCardComponent,
    UserDetailComponent
  ]
})
export class UserPageModule {}
