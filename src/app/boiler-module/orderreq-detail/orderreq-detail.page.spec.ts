import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderreqDetailPage } from './orderreq-detail.page';

describe('OrderreqDetailPage', () => {
  let component: OrderreqDetailPage;
  let fixture: ComponentFixture<OrderreqDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderreqDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderreqDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
