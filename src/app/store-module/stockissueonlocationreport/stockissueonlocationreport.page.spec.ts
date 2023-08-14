import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockissueonlocationreportPage } from './stockissueonlocationreport.page';

describe('StockissueonlocationreportPage', () => {
  let component: StockissueonlocationreportPage;
  let fixture: ComponentFixture<StockissueonlocationreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockissueonlocationreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockissueonlocationreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
