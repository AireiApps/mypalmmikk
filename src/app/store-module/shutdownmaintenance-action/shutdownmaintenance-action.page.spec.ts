import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceActionPage } from './shutdownmaintenance-action.page';

describe('ShutdownmaintenanceActionPage', () => {
  let component: ShutdownmaintenanceActionPage;
  let fixture: ComponentFixture<ShutdownmaintenanceActionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShutdownmaintenanceActionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShutdownmaintenanceActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
