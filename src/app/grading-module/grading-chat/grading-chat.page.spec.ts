import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradingChatPage } from './grading-chat.page';

describe('GradingChatPage', () => {
  let component: GradingChatPage;
  let fixture: ComponentFixture<GradingChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradingChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
