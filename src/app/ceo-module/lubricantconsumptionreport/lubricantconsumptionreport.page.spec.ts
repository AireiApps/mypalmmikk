import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LubricantconsumptionreportPage } from './lubricantconsumptionreport.page';

describe('LubricantconsumptionreportPage', () => {
  let component: LubricantconsumptionreportPage;
  let fixture: ComponentFixture<LubricantconsumptionreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LubricantconsumptionreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LubricantconsumptionreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
