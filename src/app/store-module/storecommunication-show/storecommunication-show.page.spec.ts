import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StorecommunicationShowPage } from './storecommunication-show.page';

describe('StorecommunicationShowPage', () => {
  let component: StorecommunicationShowPage;
  let fixture: ComponentFixture<StorecommunicationShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorecommunicationShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StorecommunicationShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
