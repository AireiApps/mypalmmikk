import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FfbdispatchPage } from './ffbdispatch.page';

describe('FfbdispatchPage', () => {
  let component: FfbdispatchPage;
  let fixture: ComponentFixture<FfbdispatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfbdispatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FfbdispatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
