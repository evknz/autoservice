import {
    AlertController,
    App,
    MenuController,
    NavController
    } from 'ionic-angular';
import { AuthProvider } from '../providers/auth/auth.provider';
import { OnInit } from '@angular/core';
import { SigninPage } from '../pages/signin/signin';


export abstract class BaseComponent implements OnInit {

    protected navCtrl: NavController;

    constructor(
        public alertCtrl: AlertController,
        public authProvider: AuthProvider,
        public app: App,
        public menuCtrl: MenuController
    ) {

    }

    ngOnInit(): void {
        this.navCtrl = this.app.getActiveNav();
    }

    onLogout(): void {
        this.alertCtrl.create({
            message: "Você deseja sair?",
            buttons: [
                {
                    text: "Sim",
                    handler: () => {
                        this.authProvider.logout()
                            .then(() => {
                                this.navCtrl.setRoot(SigninPage);
                                this.menuCtrl.enable(false, 'user-menu');
                            });
                    }
                },
                {
                    text: "Não",
                    handler: () => {

                    }
                }
            ]
        }).present();
    }
}