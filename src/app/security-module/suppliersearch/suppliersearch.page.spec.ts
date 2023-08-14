import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuppliersearchPage } from './suppliersearch.page';

describe('SuppliersearchPage', () => {
  let component: SuppliersearchPage;
  let fixture: ComponentFixture<SuppliersearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuppliersearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
