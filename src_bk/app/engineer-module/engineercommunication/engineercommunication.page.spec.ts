import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineercommunicationPage } from './engineercommunication.page';

describe('EngineercommunicationPage', () => {
  let component: EngineercommunicationPage;
  let fixture: ComponentFixture<EngineercommunicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineercommunicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineercommunicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
