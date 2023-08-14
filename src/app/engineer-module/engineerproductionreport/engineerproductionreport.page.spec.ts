import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineerproductionreportPage } from './engineerproductionreport.page';

describe('EngineerproductionreportPage', () => {
  let component: EngineerproductionreportPage;
  let fixture: ComponentFixture<EngineerproductionreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerproductionreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineerproductionreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
