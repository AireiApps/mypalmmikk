import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerBreakdownNewPage } from './manager-breakdown-new.page';

describe('ManagerBreakdownNewPage', () => {
  let component: ManagerBreakdownNewPage;
  let fixture: ComponentFixture<ManagerBreakdownNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerBreakdownNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerBreakdownNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
