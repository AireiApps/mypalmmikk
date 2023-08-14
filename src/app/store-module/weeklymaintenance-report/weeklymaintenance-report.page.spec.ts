import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeeklymaintenanceReportPage } from './weeklymaintenance-report.page';

describe('WeeklymaintenanceReportPage', () => {
  let component: WeeklymaintenanceReportPage;
  let fixture: ComponentFixture<WeeklymaintenanceReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklymaintenanceReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklymaintenanceReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
