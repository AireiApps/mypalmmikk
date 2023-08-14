import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewdestinationPage } from './viewdestination.page';

describe('ViewdestinationPage', () => {
  let component: ViewdestinationPage;
  let fixture: ComponentFixture<ViewdestinationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdestinationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewdestinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
