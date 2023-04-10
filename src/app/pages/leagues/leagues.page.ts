import {Component, OnInit} from '@angular/core';
import {LeaguesService} from '../../services/leagues.service';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-leagues',
    templateUrl: './leagues.page.html',
    styleUrls: ['./leagues.page.scss'],
})
export class LeaguesPage implements OnInit {
    basicLeagues: any;
    userCreatedLeagues: any;

    constructor(public modalController: ModalController, public _leaguesService: LeaguesService, public route: Router) {

    }
    ionViewWillEnter(){
        this.getLeagues();
    }

    getLeagues() {

        this._leaguesService.getUserLeagues({})
            .subscribe(
                res => {

                    this.basicLeagues = res.data.basic_leagues;
                    this.userCreatedLeagues = res.data.user_created_leagues;

                },
                err => console.log(err)
            );
    }

    openLeague(item) {
        this.route.navigateByUrl('tabs/leagues/league-games/' + item.id);
    }

    ngOnInit() {
    }

    async addLeague() {
        this.route.navigateByUrl('tabs/leagues/add-league');
    }
}
