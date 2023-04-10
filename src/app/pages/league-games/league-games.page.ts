import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LeaguesService} from '../../services/leagues.service';
import {DatePipe} from '@angular/common';
import {GamesService} from '../../services/games.service';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-league-games',
    templateUrl: './league-games.page.html',
    styleUrls: ['./league-games.page.scss'],
})
export class LeagueGamesPage implements OnInit {

    league_id: any;
    gws = [];
    currrent_gw_index: any;
    games: any;

    constructor(public router:Router,public _gamesService:GamesService,private datePipe: DatePipe, private activeRoute: ActivatedRoute, public _leaguesService: LeaguesService) {
    }

    ngOnInit() {
        this.league_id = this.activeRoute.snapshot.paramMap.get('id');
        this.getLeagues();

    }

    getLeagues() {

        this._leaguesService.getGetGWS({league_id: this.league_id})
            .subscribe(
                res => {
                    this.gws = res.data.gws;
                    this.getGWList(res.data.gws);
                },
                err => console.log(err)
            );
    }

    getGWList(gws) {
        var current_date = this.datePipe.transform(new Date(), 'yyyy-MM-dd hh:mm');

        var x = gws.filter((data: any) => {
            var start_date = this.datePipe.transform(data.start_date, 'yyyy-MM-dd hh:mm');
            var end_date = this.datePipe.transform(data.end_date, 'yyyy-MM-dd hh:mm');
            if (start_date < current_date && current_date < end_date) {
                return data;
            }
        })[0];
        if (x) {
            this.currrent_gw_index = gws.indexOf(x);
            this.getGWGames();
        } else {
            for (var i = 0; i < gws.length; i++) {
                var end_date = this.datePipe.transform(gws[i].end_date, 'yyyy-MM-dd hh:mm');
                if (current_date < end_date) {
                    this.currrent_gw_index = i;
                    this.getGWGames();
                    return;
                }
            }
            this.currrent_gw_index =gws.length-1;
            this.getGWGames();
        }

    }


    changeGW(i) {
        if (i == -1 && this.currrent_gw_index == 0) {
            return;
        }
        if (i == 1 && this.currrent_gw_index == (this.gws.length - 1)) {
            return;
        }

        this.currrent_gw_index = this.currrent_gw_index + i;
        this.getGWGames();
    }

    getGWGames() {
        var gw = this.gws[this.currrent_gw_index];
        this._leaguesService.getGWGames(gw)
            .subscribe(
                res => {
                    this.games=res.data.games;
                },
                err => console.log(err)
            );
    }






//////////sti 2 angama e
    updateChoosen = [];
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
    CanChanag(i){
        // var  start_date=this.games[i].game.start_date;
        var current_date= this.datePipe.transform(new Date(), 'yyyy-MM-dd hh:mm');
        var start_date= this.datePipe.transform(this.games[i].game.start_date, 'yyyy-MM-dd hh:mm');

        return current_date>start_date;
    }
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
    getChooseValue(item) {
        if (item['guess']) {
            return item['guess']['choose'];
        }
        return '';
    }
    ////ese 2 angami verj@



    openUserList(){
        this.router.navigateByUrl('tabs/leagues/league-user-list/'+this.league_id);
    }
    getImageName(name){
        return environment.ProfileImages+name;
    }
}
