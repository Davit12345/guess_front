import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

    openList=[];
    news: any = [];

    constructor(public _newsService: NewsService) {
    }

    ngOnInit() {
        this.getNews();
    }

    getNews() {

        this._newsService.getNews({})
            .subscribe(
                res => {

                    this.news = res.data.news;

                },
                err => console.log(err)
            );
    }


    getImageName(name) {
        if (name) {
            return environment.ProfileImagesNews + name;

        } else {
            return 'https://ionicframework.com/docs/img/demos/card-media.png';
        }
    }
}
