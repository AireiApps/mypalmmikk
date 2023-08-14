import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TurbineperformancePage } from './turbineperformance.page';

describe('TurbineperformancePage', () => {
  let component: TurbineperformancePage;
  let fixture: ComponentFixture<TurbineperformancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurbineperformancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TurbineperformancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
