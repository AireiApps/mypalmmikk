import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WageslocalPage } from './wageslocal.page';

describe('WageslocalPage', () => {
  let component: WageslocalPage;
  let fixture: ComponentFixture<WageslocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WageslocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WageslocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
