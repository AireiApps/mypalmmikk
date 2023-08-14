import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerReportedmaintenanceDetailPage } from './manager-reportedmaintenance-detail.page';

describe('ManagerReportedmaintenanceDetailPage', () => {
  let component: ManagerReportedmaintenanceDetailPage;
  let fixture: ComponentFixture<ManagerReportedmaintenanceDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerReportedmaintenanceDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerReportedmaintenanceDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
