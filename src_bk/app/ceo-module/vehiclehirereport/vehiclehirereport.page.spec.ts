import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiclehirereportPage } from './vehiclehirereport.page';

describe('VehiclehirereportPage', () => {
  let component: VehiclehirereportPage;
  let fixture: ComponentFixture<VehiclehirereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclehirereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclehirereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
