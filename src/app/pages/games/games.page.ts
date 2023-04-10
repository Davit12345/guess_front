import {Component, OnInit} from '@angular/core';
import {FunctionsProvider} from '../../helper/functions';
import {GamesService} from '../../services/games.service';
import {DatePipe} from '@angular/common';
import {environment} from 'src/environments/environment';

@Component({
    selector: 'app-games',
    templateUrl: './games.page.html',
    styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

    current_date: any;
    games: any;
    hideList = [];
    flagTitleLigue = null;
    leagueCount: any = 0;
    timezone: any;

    padLeft(text: string, padChar: string, size: number): string {
        return text.toString().padStart(size, padChar);
    }

    constructor(private datePipe: DatePipe, public _gamesService: GamesService) {

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

    ngOnInit() {
        var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        var ts = (offset < 0 ? '+' : '-') + ('00' + Math.floor(o / 60)).slice(-2) + ':' + ('00' + (o % 60)).slice(-2);
        this.timezone = '+' + this.padLeft('' + (o / 60 * 100 + o / 60 * 100), '0', 4);
        this.current_date = new Date();
        this.getGames();
    }

    getChooseValue(item) {
        if (item['guess']) {
            return item['guess']['choose'];
        }
        return '';
    }


    updateChoosen = [];

    changeChoose(event, i) {
        var x = this.getChoosenId(this.games[i]['game']['id']);

        if (x == 'add') {

            this.updateChoosen.push({game_id: this.games[i]['game']['id'], choose: event.detail.value});

        } else {
            this.updateChoosen[x]['choose'] = event.detail.value;
        }
    }

    getChoosenId(game_id) {


        for (let i = 0; i < this.updateChoosen.length; i++) {
            if (this.updateChoosen[i]['game_id'] == game_id) {
                return i;
            }
        }

        return 'add';

    }

    addChoosen() {
        this._gamesService.updateChoosen(this.updateChoosen)
            .subscribe(
                res => {
                    if (res.data.status == 'ok') {
                        this.updateChoosen = [];
                    }

                },
                err => console.log(err)
            );
    }


    CanChanag(i) {
        var current_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
        var start_date = this.datePipe.transform(this.games[i].game.start_date, 'yyyy-MM-dd HH:mm',this.timezone);
        return current_date > start_date;
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
}
