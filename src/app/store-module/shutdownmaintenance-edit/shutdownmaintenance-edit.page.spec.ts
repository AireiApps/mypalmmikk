import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceEditPage } from './shutdownmaintenance-edit.page';

describe('ShutdownmaintenanceEditPage', () => {
  let component: ShutdownmaintenanceEditPage;
  let fixture: ComponentFixture<ShutdownmaintenanceEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShutdownmaintenanceEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShutdownmaintenanceEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
