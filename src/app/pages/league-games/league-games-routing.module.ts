import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeagueGamesPage } from './league-games.page';

const routes: Routes = [
  {
    path: '',
    component: LeagueGamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueGamesPageRoutingModule {}
