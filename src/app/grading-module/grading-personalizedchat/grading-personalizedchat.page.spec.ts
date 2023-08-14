import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradingPersonalizedchatPage } from './grading-personalizedchat.page';

describe('GradingPersonalizedchatPage', () => {
  let component: GradingPersonalizedchatPage;
  let fixture: ComponentFixture<GradingPersonalizedchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingPersonalizedchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradingPersonalizedchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
