import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityothervehiclehistoryPage } from './securityothervehiclehistory.page';

describe('SecurityothervehiclehistoryPage', () => {
  let component: SecurityothervehiclehistoryPage;
  let fixture: ComponentFixture<SecurityothervehiclehistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityothervehiclehistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityothervehiclehistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
