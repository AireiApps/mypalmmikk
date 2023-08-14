import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityothervehiclePage } from './securityothervehicle.page';

describe('SecurityothervehiclePage', () => {
  let component: SecurityothervehiclePage;
  let fixture: ComponentFixture<SecurityothervehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityothervehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityothervehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
