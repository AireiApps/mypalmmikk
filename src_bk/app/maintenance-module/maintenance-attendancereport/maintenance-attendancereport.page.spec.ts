import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenanceAttendancereportPage } from './maintenance-attendancereport.page';

describe('MaintenanceAttendancereportPage', () => {
  let component: MaintenanceAttendancereportPage;
  let fixture: ComponentFixture<MaintenanceAttendancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceAttendancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceAttendancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
