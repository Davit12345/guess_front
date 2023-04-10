import {Component, OnInit} from '@angular/core';
import {StorageProvider} from '../../providers/storage';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {ModalController} from '@ionic/angular';
import {DailyCoinsComponent} from '../../components/daily-coins/daily-coins.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


    _userData = null;

    constructor(public modalController:ModalController,public storage: StorageProvider,
                public router: Router, public _usersService: UserService) {
    }

    ionViewWillEnter() {
        this.getUserData();
    }

    getUserData() {
        this._usersService.getUserData({})
            .subscribe(
                res => {

                    this._userData = res.data;
                    console.log( this._userData)
                    if (this._userData) {
                        this.storage.setUser(this._userData);
                    }

                    this.showDaily()

                },
                err => console.log(err)
            );
    }
    async showDaily() {
        const modal = await this.modalController.create({
            component: DailyCoinsComponent,
            cssClass: 'middle-modal',

        });
        modal.onDidDismiss().then((result) => {

        });
        return await modal.present();
    }
    ngOnInit() {
    }

    goRouth(item) {
        this.router.navigateByUrl('/tabs/' + item);

    }

    logout() {
        this.storage.LogedOut();
        this.router.navigateByUrl('/login');
    }

}
