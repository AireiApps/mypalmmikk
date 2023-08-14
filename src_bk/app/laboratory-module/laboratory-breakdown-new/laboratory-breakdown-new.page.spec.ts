import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratoryBreakdownNewPage } from './laboratory-breakdown-new.page';

describe('LaboratoryBreakdownNewPage', () => {
  let component: LaboratoryBreakdownNewPage;
  let fixture: ComponentFixture<LaboratoryBreakdownNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryBreakdownNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratoryBreakdownNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
