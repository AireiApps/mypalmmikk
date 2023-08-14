import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilerperformancedataPage } from './boilerperformancedata.page';

describe('BoilerperformancedataPage', () => {
  let component: BoilerperformancedataPage;
  let fixture: ComponentFixture<BoilerperformancedataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerperformancedataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerperformancedataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
