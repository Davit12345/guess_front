import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLeaguePage } from './add-league.page';

const routes: Routes = [
  {
    path: '',
    component: AddLeaguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLeaguePageRoutingModule {}
