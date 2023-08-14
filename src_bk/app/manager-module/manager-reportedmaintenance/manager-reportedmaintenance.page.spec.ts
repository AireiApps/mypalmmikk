import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerReportedmaintenancePage } from './manager-reportedmaintenance.page';

describe('ManagerReportedmaintenancePage', () => {
  let component: ManagerReportedmaintenancePage;
  let fixture: ComponentFixture<ManagerReportedmaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerReportedmaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerReportedmaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
