import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserLeagueService} from '../../services/user-league.service';

@Component({
    selector: 'app-league-user-list',
    templateUrl: './league-user-list.page.html',
    styleUrls: ['./league-user-list.page.scss'],
})
export class LeagueUserListPage implements OnInit {
    league_id: any;
    players: any = [];
    order = 'point';

    constructor(public _userleagueService: UserLeagueService, private activeRoute: ActivatedRoute,) {
    }

    ngOnInit() {
        this.league_id = this.activeRoute.snapshot.paramMap.get('id');
        this.getPlayersList();
    }

    getPlayersList() {
        this._userleagueService.getPlayers({league_id: this.league_id, order: this.order})
            .subscribe(
                res => {
                    console.log(res);
                    this.players = res.data.players;
                },
                err => console.log(err)
            );
    }

    getOrderBy(item) {
        this.order = item;
        this.getPlayersList();
    }
}
