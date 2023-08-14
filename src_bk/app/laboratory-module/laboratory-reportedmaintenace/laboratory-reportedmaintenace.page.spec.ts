import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratoryReportedmaintenacePage } from './laboratory-reportedmaintenace.page';

describe('LaboratoryReportedmaintenacePage', () => {
  let component: LaboratoryReportedmaintenacePage;
  let fixture: ComponentFixture<LaboratoryReportedmaintenacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryReportedmaintenacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratoryReportedmaintenacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
