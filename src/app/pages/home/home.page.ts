import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {StorageProvider} from '../../providers/storage';
import {DatePipe} from '@angular/common';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
