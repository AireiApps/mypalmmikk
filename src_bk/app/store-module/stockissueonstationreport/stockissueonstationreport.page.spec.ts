import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockissueonstationreportPage } from './stockissueonstationreport.page';

describe('StockissueonstationreportPage', () => {
  let component: StockissueonstationreportPage;
  let fixture: ComponentFixture<StockissueonstationreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockissueonstationreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockissueonstationreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
