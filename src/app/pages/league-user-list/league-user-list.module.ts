import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeagueUserListPageRoutingModule } from './league-user-list-routing.module';

import { LeagueUserListPage } from './league-user-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeagueUserListPageRoutingModule
  ],
  declarations: [LeagueUserListPage]
})
export class LeagueUserListPageModule {}
