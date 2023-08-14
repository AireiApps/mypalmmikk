import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupplierUpdatePage } from './supplier-update.page';

describe('SupplierUpdatePage', () => {
  let component: SupplierUpdatePage;
  let fixture: ComponentFixture<SupplierUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
