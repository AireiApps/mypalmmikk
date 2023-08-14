import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradingPersonalizedchatdepartmentsPage } from './grading-personalizedchatdepartments.page';

describe('GradingPersonalizedchatdepartmentsPage', () => {
  let component: GradingPersonalizedchatdepartmentsPage;
  let fixture: ComponentFixture<GradingPersonalizedchatdepartmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingPersonalizedchatdepartmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradingPersonalizedchatdepartmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
