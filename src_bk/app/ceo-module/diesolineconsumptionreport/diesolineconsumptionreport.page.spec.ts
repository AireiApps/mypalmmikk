import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiesolineconsumptionreportPage } from './diesolineconsumptionreport.page';

describe('DiesolineconsumptionreportPage', () => {
  let component: DiesolineconsumptionreportPage;
  let fixture: ComponentFixture<DiesolineconsumptionreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiesolineconsumptionreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiesolineconsumptionreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
