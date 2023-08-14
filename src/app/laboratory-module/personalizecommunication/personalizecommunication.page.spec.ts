import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalizecommunicationPage } from './personalizecommunication.page';

describe('PersonalizecommunicationPage', () => {
  let component: PersonalizecommunicationPage;
  let fixture: ComponentFixture<PersonalizecommunicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizecommunicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalizecommunicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
