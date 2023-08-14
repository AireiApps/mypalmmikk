import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrivermapsPage } from './drivermaps.page';

describe('DrivermapsPage', () => {
  let component: DrivermapsPage;
  let fixture: ComponentFixture<DrivermapsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivermapsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrivermapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
