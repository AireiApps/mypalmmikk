import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoPersonalizedchatdepartmentsPage } from './ceo-personalizedchatdepartments.page';

describe('CeoPersonalizedchatdepartmentsPage', () => {
  let component: CeoPersonalizedchatdepartmentsPage;
  let fixture: ComponentFixture<CeoPersonalizedchatdepartmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoPersonalizedchatdepartmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoPersonalizedchatdepartmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
