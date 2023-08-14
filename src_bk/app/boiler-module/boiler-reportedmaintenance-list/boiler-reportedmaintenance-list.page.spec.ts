import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilerReportedmaintenanceListPage } from './boiler-reportedmaintenance-list.page';

describe('BoilerReportedmaintenanceListPage', () => {
  let component: BoilerReportedmaintenanceListPage;
  let fixture: ComponentFixture<BoilerReportedmaintenanceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerReportedmaintenanceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerReportedmaintenanceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
