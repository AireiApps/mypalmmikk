import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratoryReportedmaintenaceListPage } from './laboratory-reportedmaintenace-list.page';

describe('LaboratoryReportedmaintenaceListPage', () => {
  let component: LaboratoryReportedmaintenaceListPage;
  let fixture: ComponentFixture<LaboratoryReportedmaintenaceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryReportedmaintenaceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratoryReportedmaintenaceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
