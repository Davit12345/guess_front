import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }


  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Dashboard',
      url: '/home',
      icon: 'text'
    },
    {
      title: 'Favorites',
      url: '/favorite',
      icon: 'star'
    },
    {
      title: 'Developing',
      url: '/developing',
      icon: 'game-controller'
    },
    {
      title: 'Check Memory',
      url: '/check-memory',
      icon: 'game-controller'
    },

  ];



  initializeApp() {
    // this.platform.ready().then(() => {
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    // });
  }
}
