import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeSupplierPage } from './home-supplier.page';

describe('HomeSupplierPage', () => {
  let component: HomeSupplierPage;
  let fixture: ComponentFixture<HomeSupplierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSupplierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSupplierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
