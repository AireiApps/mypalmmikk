import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportGradingreportPage } from './report-gradingreport.page';

describe('ReportGradingreportPage', () => {
  let component: ReportGradingreportPage;
  let fixture: ComponentFixture<ReportGradingreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGradingreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportGradingreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
