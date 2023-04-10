import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {AuthGuardService} from '../services/auth-guard.service';
import {AuthGuardOutService} from '../helper/auth-guard-out.service';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
     // canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'games',
        loadChildren: () => import('./../pages/games/games.module').then( m => m.GamesPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'news',
        loadChildren: () => import('./../pages/news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./../pages/profile/profile.module').then( m => m.ProfilePageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'leagues',
        loadChildren: () => import('./../pages/leagues/leagues.module').then( m => m.LeaguesPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'leagues/league-games/:id',
        loadChildren: () => import('./../pages/league-games/league-games.module').then( m => m.LeagueGamesPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'notifications',
        loadChildren: () => import('./../pages/notifications/notifications.module').then( m => m.NotificationsPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'league-games',
        loadChildren: () => import('./../pages/league-games/league-games.module').then( m => m.LeagueGamesPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: 'leagues/league-user-list/:id',
        loadChildren: () => import('./../pages/league-user-list/league-user-list.module').then( m => m.LeagueUserListPageModule),
        canActivate: [AuthGuardService]

      },
      {
        path: 'leagues/add-league',
        loadChildren: () => import('./../pages/add-league/add-league.module').then( m => m.AddLeaguePageModule)
      },

      {
        path: 'friends',
        loadChildren: () => import('./../pages/friends/friends.module').then( m => m.FriendsPageModule),
        canActivate: [AuthGuardService]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
