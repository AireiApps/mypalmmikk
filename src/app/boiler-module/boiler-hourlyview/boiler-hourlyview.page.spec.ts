import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilerHourlyviewPage } from './boiler-hourlyview.page';

describe('BoilerHourlyviewPage', () => {
  let component: BoilerHourlyviewPage;
  let fixture: ComponentFixture<BoilerHourlyviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerHourlyviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerHourlyviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
