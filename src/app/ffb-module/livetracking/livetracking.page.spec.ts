import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivetrackingPage } from './livetracking.page';

describe('LivetrackingPage', () => {
  let component: LivetrackingPage;
  let fixture: ComponentFixture<LivetrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivetrackingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivetrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
