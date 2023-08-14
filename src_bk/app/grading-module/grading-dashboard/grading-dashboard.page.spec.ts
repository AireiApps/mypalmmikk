import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradingDashboardPage } from './grading-dashboard.page';

describe('GradingDashboardPage', () => {
  let component: GradingDashboardPage;
  let fixture: ComponentFixture<GradingDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradingDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
