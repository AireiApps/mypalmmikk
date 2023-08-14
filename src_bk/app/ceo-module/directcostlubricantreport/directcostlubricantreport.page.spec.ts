import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectcostlubricantreportPage } from './directcostlubricantreport.page';

describe('DirectcostlubricantreportPage', () => {
  let component: DirectcostlubricantreportPage;
  let fixture: ComponentFixture<DirectcostlubricantreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectcostlubricantreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectcostlubricantreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
