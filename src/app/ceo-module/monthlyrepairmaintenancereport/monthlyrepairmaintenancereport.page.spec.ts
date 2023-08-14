import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonthlyrepairmaintenancereportPage } from './monthlyrepairmaintenancereport.page';

describe('MonthlyrepairmaintenancereportPage', () => {
  let component: MonthlyrepairmaintenancereportPage;
  let fixture: ComponentFixture<MonthlyrepairmaintenancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyrepairmaintenancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonthlyrepairmaintenancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
