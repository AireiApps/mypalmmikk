import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagermaintenancereportPage } from './managermaintenancereport.page';

describe('ManagermaintenancereportPage', () => {
  let component: ManagermaintenancereportPage;
  let fixture: ComponentFixture<ManagermaintenancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagermaintenancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagermaintenancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
