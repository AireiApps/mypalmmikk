import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerorderreqDetailPage } from './managerorderreq-detail.page';

describe('ManagerorderreqDetailPage', () => {
  let component: ManagerorderreqDetailPage;
  let fixture: ComponentFixture<ManagerorderreqDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerorderreqDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerorderreqDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
