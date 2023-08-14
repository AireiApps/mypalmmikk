import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityBroadcastchatPage } from './security-broadcastchat.page';

describe('SecurityBroadcastchatPage', () => {
  let component: SecurityBroadcastchatPage;
  let fixture: ComponentFixture<SecurityBroadcastchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityBroadcastchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityBroadcastchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
