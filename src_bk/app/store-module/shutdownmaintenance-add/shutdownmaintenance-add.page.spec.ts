import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShutdownmaintenanceAddPage } from './shutdownmaintenance-add.page';

describe('ShutdownmaintenanceAddPage', () => {
  let component: ShutdownmaintenanceAddPage;
  let fixture: ComponentFixture<ShutdownmaintenanceAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShutdownmaintenanceAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShutdownmaintenanceAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
