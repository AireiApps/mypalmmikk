import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderreqlistPage } from './orderreqlist.page';

describe('OrderreqlistPage', () => {
  let component: OrderreqlistPage;
  let fixture: ComponentFixture<OrderreqlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderreqlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderreqlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
