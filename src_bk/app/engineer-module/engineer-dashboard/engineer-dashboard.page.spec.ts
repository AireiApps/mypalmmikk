import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineerDashboardPage } from './engineer-dashboard.page';

describe('EngineerDashboardPage', () => {
  let component: EngineerDashboardPage;
  let fixture: ComponentFixture<EngineerDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineerDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
