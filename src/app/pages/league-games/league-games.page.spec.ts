import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeagueGamesPage } from './league-games.page';

describe('LeagueGamesPage', () => {
  let component: LeagueGamesPage;
  let fixture: ComponentFixture<LeagueGamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueGamesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
