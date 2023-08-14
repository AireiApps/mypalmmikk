import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeeklyMaintenanceViewPage } from './weekly-maintenance-view.page';

describe('WeeklyMaintenanceViewPage', () => {
  let component: WeeklyMaintenanceViewPage;
  let fixture: ComponentFixture<WeeklyMaintenanceViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyMaintenanceViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyMaintenanceViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
