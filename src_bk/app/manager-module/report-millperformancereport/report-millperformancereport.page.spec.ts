import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportMillperformancereportPage } from './report-millperformancereport.page';

describe('ReportMillperformancereportPage', () => {
  let component: ReportMillperformancereportPage;
  let fixture: ComponentFixture<ReportMillperformancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMillperformancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportMillperformancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
