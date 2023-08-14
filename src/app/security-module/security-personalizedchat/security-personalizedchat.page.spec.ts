import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityPersonalizedchatPage } from './security-personalizedchat.page';

describe('SecurityPersonalizedchatPage', () => {
  let component: SecurityPersonalizedchatPage;
  let fixture: ComponentFixture<SecurityPersonalizedchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityPersonalizedchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityPersonalizedchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
