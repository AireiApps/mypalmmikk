import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeeklyMaintenanceEditPage } from './weekly-maintenance-edit.page';

describe('WeeklyMaintenanceEditPage', () => {
  let component: WeeklyMaintenanceEditPage;
  let fixture: ComponentFixture<WeeklyMaintenanceEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyMaintenanceEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyMaintenanceEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
