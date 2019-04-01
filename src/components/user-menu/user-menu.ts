import { AlertController, App, MenuController } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth.provider';
import { BaseComponent } from '../base.component';
import { Component, Input } from '@angular/core';
import { User } from './../../models/user.model';
import { UserProfilePage } from './../../pages/user-profile/user-profile';

@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.html'
})
export class UserMenuComponent extends BaseComponent{

  @Input('user') currentUser: User;

  constructor(
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, authProvider, app, menuCtrl);
  }

  onProfile(): void {
    this.navCtrl.push(UserProfilePage);
  }
  

}
