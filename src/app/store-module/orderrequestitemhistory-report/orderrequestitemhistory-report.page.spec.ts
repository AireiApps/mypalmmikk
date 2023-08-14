import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderrequestitemhistoryReportPage } from './orderrequestitemhistory-report.page';

describe('OrderrequestitemhistoryReportPage', () => {
  let component: OrderrequestitemhistoryReportPage;
  let fixture: ComponentFixture<OrderrequestitemhistoryReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderrequestitemhistoryReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderrequestitemhistoryReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
