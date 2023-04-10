import {Component, OnInit} from '@angular/core';
import {FriendService} from '../../services/friend.service';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.page.html',
    styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
    friendList: any = [];
    find: any = null;
    type = 'friends';

    constructor(public friendService: FriendService) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.getFriends();
    }

    getFriends() {

        this.friendService.getFriends({type: this.type})
            .subscribe(
                res => {
                    this.friendList = res.data.data;
                },
                err => console.log(err)
            );
    }

    openItem(item: any) {

    }

    findFriend(ev) {
        console.log(ev.value);
        this.errorFind = false;
    }

    searchUser: any = null;
    errorFind = false;

    checkUser() {
        this.errorFind = false;
        this.searchUser = null;

        this.friendService.searchFriend({search: this.find})
            .subscribe(
                res => {
                    if (res.data.user) {
                        this.searchUser = res.data;
                    } else {
                        this.errorFind = true;
                    }


                },
                err => console.log(err)
            );
    }

    getTab(item) {
        this.type = item;
        this.getFriends();
    }

    addRequest() {
        this.friendService.addRequesat({friend_id: this.searchUser.user.id})
            .subscribe(
                res => {
                    this.searchUser = null;
                    this.type = 'request';
                    this.getFriends();
                },
                err => console.log(err)
            );
    }
    confirmFriend(id) {
        this.friendService.confirmRequest({id: id})
            .subscribe(
                res => {
                    this.searchUser = null;
                    this.type = 'friends';
                    this.getFriends();
                },
                err => console.log(err)
            );
    }
}
