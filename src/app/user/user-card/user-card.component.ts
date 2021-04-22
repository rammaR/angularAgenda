import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Output() onDelete: EventEmitter<User> = new EventEmitter();
  @Output() onView: EventEmitter<User> = new EventEmitter();

  constructor(private alertController: AlertController) { }

  ngOnInit() {

  }

  delete() {
    this.presentAlert().then(role => {
      if (role !== 'cancel') {
        this.onDelete.emit(this.user);
      }
    })
  }

  view() {
    this.onView.emit(this.user);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      subHeader: '',
      message: 'Tem certeza de que deseja excluir?',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      }, {
        text: 'Excluir',
        role: 'confirm'
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

    return role;
  }

}
