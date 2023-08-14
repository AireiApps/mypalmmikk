import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoBroadcastchatPage } from './ceo-broadcastchat.page';

describe('CeoBroadcastchatPage', () => {
  let component: CeoBroadcastchatPage;
  let fixture: ComponentFixture<CeoBroadcastchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoBroadcastchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoBroadcastchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
