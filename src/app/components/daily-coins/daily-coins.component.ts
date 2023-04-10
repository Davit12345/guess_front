import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-daily-coins',
    templateUrl: './daily-coins.component.html',
    styleUrls: ['./daily-coins.component.scss'],
})
export class DailyCoinsComponent implements OnInit {

    constructor(public modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    close() {
        this.modalCtrl.dismiss();
    }
}
