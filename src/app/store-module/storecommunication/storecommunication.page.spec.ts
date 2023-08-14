import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StorecommunicationPage } from './storecommunication.page';

describe('StorecommunicationPage', () => {
  let component: StorecommunicationPage;
  let fixture: ComponentFixture<StorecommunicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorecommunicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StorecommunicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
