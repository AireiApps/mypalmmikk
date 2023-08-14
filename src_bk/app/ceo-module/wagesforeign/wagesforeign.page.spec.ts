import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WagesforeignPage } from './wagesforeign.page';

describe('WagesforeignPage', () => {
  let component: WagesforeignPage;
  let fixture: ComponentFixture<WagesforeignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesforeignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WagesforeignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
