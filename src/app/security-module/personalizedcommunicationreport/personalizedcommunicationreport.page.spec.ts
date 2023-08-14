import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalizedcommunicationreportPage } from './personalizedcommunicationreport.page';

describe('PersonalizedcommunicationreportPage', () => {
  let component: PersonalizedcommunicationreportPage;
  let fixture: ComponentFixture<PersonalizedcommunicationreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedcommunicationreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalizedcommunicationreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
