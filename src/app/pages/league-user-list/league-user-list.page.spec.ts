import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeagueUserListPage } from './league-user-list.page';

describe('LeagueUserListPage', () => {
  let component: LeagueUserListPage;
  let fixture: ComponentFixture<LeagueUserListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueUserListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueUserListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
