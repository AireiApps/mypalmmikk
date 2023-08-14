import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderreqAddPage } from './orderreq-add.page';

describe('OrderreqAddPage', () => {
  let component: OrderreqAddPage;
  let fixture: ComponentFixture<OrderreqAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderreqAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderreqAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
