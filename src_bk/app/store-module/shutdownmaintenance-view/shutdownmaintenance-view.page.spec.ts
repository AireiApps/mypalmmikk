import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceViewPage } from './shutdownmaintenance-view.page';

describe('ShutdownmaintenanceViewPage', () => {
  let component: ShutdownmaintenanceViewPage;
  let fixture: ComponentFixture<ShutdownmaintenanceViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShutdownmaintenanceViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShutdownmaintenanceViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
