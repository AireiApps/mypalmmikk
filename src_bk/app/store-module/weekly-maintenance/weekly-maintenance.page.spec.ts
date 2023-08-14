import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeeklyMaintenancePage } from './weekly-maintenance.page';

describe('WeeklyMaintenancePage', () => {
  let component: WeeklyMaintenancePage;
  let fixture: ComponentFixture<WeeklyMaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyMaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyMaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
