import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineercommunicationShowPage } from './engineercommunication-show.page';

describe('EngineercommunicationShowPage', () => {
  let component: EngineercommunicationShowPage;
  let fixture: ComponentFixture<EngineercommunicationShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineercommunicationShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineercommunicationShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
