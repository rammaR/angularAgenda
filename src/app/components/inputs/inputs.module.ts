import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MyInputComponent } from './my-input/my-input.component';
import { MySelectComponent } from './my-select/my-select.component';
import { MyAbstractComponent } from './my-abstract/my-abstract.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule
    ],
    declarations: [
        MyAbstractComponent,
        MyInputComponent,
        MySelectComponent
    ],
    exports: [
        MyInputComponent,
        MySelectComponent
    ]
})
export class MyInputsModule { }
