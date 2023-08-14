import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratoryBreakdownListPage } from './laboratory-breakdown-list.page';

describe('LaboratoryBreakdownListPage', () => {
  let component: LaboratoryBreakdownListPage;
  let fixture: ComponentFixture<LaboratoryBreakdownListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryBreakdownListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratoryBreakdownListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
