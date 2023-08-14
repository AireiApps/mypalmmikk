import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerPersonalizedchatdepartmentsPage } from './manager-personalizedchatdepartments.page';

describe('ManagerPersonalizedchatdepartmentsPage', () => {
  let component: ManagerPersonalizedchatdepartmentsPage;
  let fixture: ComponentFixture<ManagerPersonalizedchatdepartmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPersonalizedchatdepartmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerPersonalizedchatdepartmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
