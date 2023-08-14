import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeeklyMaintenanceActionPage } from './weekly-maintenance-action.page';

describe('WeeklyMaintenanceActionPage', () => {
  let component: WeeklyMaintenanceActionPage;
  let fixture: ComponentFixture<WeeklyMaintenanceActionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyMaintenanceActionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyMaintenanceActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
