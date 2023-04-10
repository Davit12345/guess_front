import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {GamesService} from '../../services/games.service';
import {environment} from '../../../environments/environment';
import {FunctionsProvider} from '../../helper/functions';
import {LeaguesService} from '../../services/leagues.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-add-league',
    templateUrl: './add-league.page.html',
    styleUrls: ['./add-league.page.scss'],
})
export class AddLeaguePage implements OnInit {

    step = 1;
    minDate: any;
    ionicForm: FormGroup;
    current_date: any;
    games: any;
    hideList = [];
    flagTitleLigue = null;
    leagueCount: any = 0;
    timezone: any;
    chooseList = [];

    ionViewWillEnter() {
        this.minDate = new Date().toISOString();
        console.log(this.minDate);

    }

    constructor(public functions: FunctionsProvider,
                public formBuilder: FormBuilder, private datePipe: DatePipe,
                public _gamesService: GamesService,
                public _leagueService: LeaguesService,
                public nav: NavController,
    ) {

        this.ionicForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            start_date: ['', [Validators.required]],
            end_date: ['', [Validators.required]],
        });
    }

    padLeft(text: string, padChar: string, size: number): string {
        return text.toString().padStart(size, padChar);
    }

    ngOnInit() {
        var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        var ts = (offset < 0 ? '+' : '-') + ('00' + Math.floor(o / 60)).slice(-2) + ':' + ('00' + (o % 60)).slice(-2);
        this.timezone = '+' + this.padLeft('' + (o / 60 * 100 + o / 60 * 100), '0', 4);
    }

    SaveLeague() {
        console.log(this.ionicForm.value);
        if (this.ionicForm.value.start_date < this.ionicForm.value.end_date) {
            console.log('ok');
            this.step = 2;
            this.initDate();


        } else {
            console.log('errroro');
        }
    }

    initDate() {

        this.current_date = new Date(this.ionicForm.value.start_date);
        console.log(this.current_date);
        this.getGames();
    }

    changeDate(type) {

        this.current_date = new Date(this.current_date.setDate(this.current_date.getDate() + type));
        this.getGames();
    }

    getGames() {
        var date = this.datePipe.transform(this.current_date, 'yyyy-MM-dd'); //output : 2018-02-13

        this._gamesService.getGames({current_date: date})
            .subscribe(
                res => {

                    this.games = res.data.data;
                    this.leagueCount = res.data.leagueCount;
                    this.hideList = [];
                    this.flagTitleLigue = null;
                },
                err => console.log(err)
            );
    }

    LeagueTitle(game) {
        if (game.league_id == this.flagTitleLigue) {

            return false;
        } else {

            this.flagTitleLigue = game.league_id;
            return true;
        }

    }

    showHideLeague(id) {
        if (this.hideList.includes(id)) {
            this.hideList.splice(this.hideList.indexOf(id), 1);

        } else {
            this.hideList.push(id);
        }


        console.log(this.hideList);
    }

    getImageName(name) {
        return environment.ProfileImages + name;
    }

    checkForNewGame(ev: any, game_id) {
        console.log(ev.target.checked);
        if (ev.target.checked) {
            this.chooseList.push(game_id);
        } else {
            this.deleteMsg(game_id);
        }
        console.log(this.chooseList);
    }

    deleteMsg(msg: string) {
        const index: number = this.chooseList.indexOf(msg);
        if (index !== -1) {
            this.chooseList.splice(index, 1);
        }
    }

    saveLeague() {
        if (this.chooseList.length < 2 || this.chooseList.length > 120) {
            this.functions.presentToast('Choose minimum 10 game Maximum 120 game', FunctionsProvider.ERROR_TOAST);

        } else {
            this._leagueService.addUserLeague({league: this.ionicForm.value, games: this.chooseList})
                .subscribe(
                    res => {
                        this.nav.back();
                    },
                    err => console.log(err)
                );
        }

    }
}
