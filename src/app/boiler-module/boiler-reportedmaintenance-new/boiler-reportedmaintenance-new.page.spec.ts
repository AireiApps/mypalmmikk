import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilerReportedmaintenanceNewPage } from './boiler-reportedmaintenance-new.page';

describe('BoilerReportedmaintenanceNewPage', () => {
  let component: BoilerReportedmaintenanceNewPage;
  let fixture: ComponentFixture<BoilerReportedmaintenanceNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerReportedmaintenanceNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerReportedmaintenanceNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
