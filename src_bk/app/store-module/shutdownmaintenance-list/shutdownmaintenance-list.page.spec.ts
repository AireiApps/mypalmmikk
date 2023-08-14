import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceListPage } from './shutdownmaintenance-list.page';

describe('ShutdownmaintenanceListPage', () => {
  let component: ShutdownmaintenanceListPage;
  let fixture: ComponentFixture<ShutdownmaintenanceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShutdownmaintenanceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShutdownmaintenanceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
