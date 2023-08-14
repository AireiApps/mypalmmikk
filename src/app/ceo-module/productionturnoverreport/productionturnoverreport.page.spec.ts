import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductionturnoverreportPage } from './productionturnoverreport.page';

describe('ProductionturnoverreportPage', () => {
  let component: ProductionturnoverreportPage;
  let fixture: ComponentFixture<ProductionturnoverreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionturnoverreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductionturnoverreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
