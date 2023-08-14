import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeoPersonalizedchatPage } from './ceo-personalizedchat.page';

describe('CeoPersonalizedchatPage', () => {
  let component: CeoPersonalizedchatPage;
  let fixture: ComponentFixture<CeoPersonalizedchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeoPersonalizedchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeoPersonalizedchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
