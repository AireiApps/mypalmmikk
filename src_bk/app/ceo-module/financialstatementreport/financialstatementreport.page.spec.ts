import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinancialstatementreportPage } from './financialstatementreport.page';

describe('FinancialstatementreportPage', () => {
  let component: FinancialstatementreportPage;
  let fixture: ComponentFixture<FinancialstatementreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialstatementreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialstatementreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
