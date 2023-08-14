import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupervisorReportedmaintenanceNewPage } from './supervisor-reportedmaintenance-new.page';

describe('SupervisorReportedmaintenanceNewPage', () => {
  let component: SupervisorReportedmaintenanceNewPage;
  let fixture: ComponentFixture<SupervisorReportedmaintenanceNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorReportedmaintenanceNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupervisorReportedmaintenanceNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
