import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorReportedmaintenanceListPage } from './supervisor-reportedmaintenance-list.page';

describe('SupervisorReportedmaintenanceListPage', () => {
  let component: SupervisorReportedmaintenanceListPage;
  let fixture: ComponentFixture<SupervisorReportedmaintenanceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorReportedmaintenanceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorReportedmaintenanceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
