import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreasingViewPage } from './greasing-view.page';

describe('GreasingViewPage', () => {
  let component: GreasingViewPage;
  let fixture: ComponentFixture<GreasingViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreasingViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreasingViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
