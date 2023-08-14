import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineerhomePage } from './engineerhome.page';

describe('EngineerhomePage', () => {
  let component: EngineerhomePage;
  let fixture: ComponentFixture<EngineerhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineerhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
