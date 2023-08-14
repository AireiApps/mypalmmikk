import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratoryreportHourlyPage } from './laboratoryreport-hourly.page';

describe('LaboratoryreportHourlyPage', () => {
  let component: LaboratoryreportHourlyPage;
  let fixture: ComponentFixture<LaboratoryreportHourlyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryreportHourlyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratoryreportHourlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
