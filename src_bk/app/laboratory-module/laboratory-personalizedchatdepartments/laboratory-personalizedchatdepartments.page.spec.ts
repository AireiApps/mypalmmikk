import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratoryPersonalizedchatdepartmentsPage } from './laboratory-personalizedchatdepartments.page';

describe('LaboratoryPersonalizedchatdepartmentsPage', () => {
  let component: LaboratoryPersonalizedchatdepartmentsPage;
  let fixture: ComponentFixture<LaboratoryPersonalizedchatdepartmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryPersonalizedchatdepartmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratoryPersonalizedchatdepartmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
