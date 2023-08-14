import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductiontallreportPage } from './productiontallreport.page';

describe('ProductiontallreportPage', () => {
  let component: ProductiontallreportPage;
  let fixture: ComponentFixture<ProductiontallreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiontallreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductiontallreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
