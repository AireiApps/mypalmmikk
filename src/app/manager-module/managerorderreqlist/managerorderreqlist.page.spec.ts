import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerorderreqlistPage } from './managerorderreqlist.page';

describe('ManagerorderreqlistPage', () => {
  let component: ManagerorderreqlistPage;
  let fixture: ComponentFixture<ManagerorderreqlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerorderreqlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerorderreqlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
