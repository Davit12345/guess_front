import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeagueUserListPage } from './league-user-list.page';

const routes: Routes = [
  {
    path: '',
    component: LeagueUserListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueUserListPageRoutingModule {}
