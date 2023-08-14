import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradingcommunicationShowPage } from './gradingcommunication-show.page';

describe('GradingcommunicationShowPage', () => {
  let component: GradingcommunicationShowPage;
  let fixture: ComponentFixture<GradingcommunicationShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingcommunicationShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradingcommunicationShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
