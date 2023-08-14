import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaintenancecommunicationreportPage } from './maintenancecommunicationreport.page';

describe('MaintenancecommunicationreportPage', () => {
  let component: MaintenancecommunicationreportPage;
  let fixture: ComponentFixture<MaintenancecommunicationreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancecommunicationreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenancecommunicationreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
