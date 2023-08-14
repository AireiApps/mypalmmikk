import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradingcommunicationPage } from './gradingcommunication.page';

describe('GradingcommunicationPage', () => {
  let component: GradingcommunicationPage;
  let fixture: ComponentFixture<GradingcommunicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingcommunicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradingcommunicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
