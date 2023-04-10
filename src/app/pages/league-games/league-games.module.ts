import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeagueGamesPageRoutingModule } from './league-games-routing.module';

import { LeagueGamesPage } from './league-games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeagueGamesPageRoutingModule
  ],
  declarations: [LeagueGamesPage]
})
export class LeagueGamesPageModule {}
