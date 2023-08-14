import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportBoilerlogreportPage } from './report-boilerlogreport.page';

describe('ReportBoilerlogreportPage', () => {
  let component: ReportBoilerlogreportPage;
  let fixture: ComponentFixture<ReportBoilerlogreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBoilerlogreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportBoilerlogreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
