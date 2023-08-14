import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerReportsPage } from './manager-reports.page';

describe('ManagerReportsPage', () => {
  let component: ManagerReportsPage;
  let fixture: ComponentFixture<ManagerReportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerReportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
