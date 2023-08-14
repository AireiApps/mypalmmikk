import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityPersonalizedchatdepartmentPage } from './security-personalizedchatdepartment.page';

describe('SecurityPersonalizedchatdepartmentPage', () => {
  let component: SecurityPersonalizedchatdepartmentPage;
  let fixture: ComponentFixture<SecurityPersonalizedchatdepartmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityPersonalizedchatdepartmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityPersonalizedchatdepartmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
