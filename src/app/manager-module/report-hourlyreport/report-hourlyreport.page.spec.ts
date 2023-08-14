import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportHourlyreportPage } from './report-hourlyreport.page';

describe('ReportHourlyreportPage', () => {
  let component: ReportHourlyreportPage;
  let fixture: ComponentFixture<ReportHourlyreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportHourlyreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportHourlyreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
