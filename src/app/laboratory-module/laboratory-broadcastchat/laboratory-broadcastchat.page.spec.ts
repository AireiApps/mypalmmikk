import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratoryBroadcastchatPage } from './laboratory-broadcastchat.page';

describe('LaboratoryBroadcastchatPage', () => {
  let component: LaboratoryBroadcastchatPage;
  let fixture: ComponentFixture<LaboratoryBroadcastchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryBroadcastchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratoryBroadcastchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
