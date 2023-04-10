import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLeaguePage } from './add-league.page';

describe('AddLeaguePage', () => {
  let component: AddLeaguePage;
  let fixture: ComponentFixture<AddLeaguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeaguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLeaguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
