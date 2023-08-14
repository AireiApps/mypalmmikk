import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradingSuppliersearchPage } from './grading-suppliersearch.page';

describe('GradingSuppliersearchPage', () => {
  let component: GradingSuppliersearchPage;
  let fixture: ComponentFixture<GradingSuppliersearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingSuppliersearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradingSuppliersearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
