import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BroadcastcommunicationPage } from './broadcastcommunication.page';

describe('BroadcastcommunicationPage', () => {
  let component: BroadcastcommunicationPage;
  let fixture: ComponentFixture<BroadcastcommunicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastcommunicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BroadcastcommunicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
