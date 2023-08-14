import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerReportedmaintenanceNewPage } from './manager-reportedmaintenance-new.page';

describe('ManagerReportedmaintenanceNewPage', () => {
  let component: ManagerReportedmaintenanceNewPage;
  let fixture: ComponentFixture<ManagerReportedmaintenanceNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerReportedmaintenanceNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerReportedmaintenanceNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
