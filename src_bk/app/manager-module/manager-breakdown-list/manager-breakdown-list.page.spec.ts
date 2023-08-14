import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerBreakdownListPage } from './manager-breakdown-list.page';

describe('ManagerBreakdownListPage', () => {
  let component: ManagerBreakdownListPage;
  let fixture: ComponentFixture<ManagerBreakdownListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerBreakdownListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerBreakdownListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
