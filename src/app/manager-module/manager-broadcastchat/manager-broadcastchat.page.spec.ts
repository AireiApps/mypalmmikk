import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerBroadcastchatPage } from './manager-broadcastchat.page';

describe('ManagerBroadcastchatPage', () => {
  let component: ManagerBroadcastchatPage;
  let fixture: ComponentFixture<ManagerBroadcastchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerBroadcastchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerBroadcastchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
