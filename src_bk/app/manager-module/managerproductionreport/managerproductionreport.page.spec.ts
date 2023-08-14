import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerproductionreportPage } from './managerproductionreport.page';

describe('ManagerproductionreportPage', () => {
  let component: ManagerproductionreportPage;
  let fixture: ComponentFixture<ManagerproductionreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerproductionreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerproductionreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
