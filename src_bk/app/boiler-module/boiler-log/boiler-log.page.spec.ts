import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilerLogPage } from './boiler-log.page';

describe('BoilerLogPage', () => {
  let component: BoilerLogPage;
  let fixture: ComponentFixture<BoilerLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
