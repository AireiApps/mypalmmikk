import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerorderreqAddPage } from './managerorderreq-add.page';

describe('ManagerorderreqAddPage', () => {
  let component: ManagerorderreqAddPage;
  let fixture: ComponentFixture<ManagerorderreqAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerorderreqAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerorderreqAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
