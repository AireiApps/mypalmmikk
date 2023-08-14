import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeeklyMaintenanceListPage } from './weekly-maintenance-list.page';

describe('WeeklyMaintenanceListPage', () => {
  let component: WeeklyMaintenanceListPage;
  let fixture: ComponentFixture<WeeklyMaintenanceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyMaintenanceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyMaintenanceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
