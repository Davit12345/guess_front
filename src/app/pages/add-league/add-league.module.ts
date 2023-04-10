import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AddLeaguePageRoutingModule} from './add-league-routing.module';

import {AddLeaguePage} from './add-league.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        AddLeaguePageRoutingModule
    ],
    declarations: [AddLeaguePage]
})
export class AddLeaguePageModule {
}
