import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FactorychemicalconsumptionreportPage } from './factorychemicalconsumptionreport.page';

describe('FactorychemicalconsumptionreportPage', () => {
  let component: FactorychemicalconsumptionreportPage;
  let fixture: ComponentFixture<FactorychemicalconsumptionreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorychemicalconsumptionreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FactorychemicalconsumptionreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
