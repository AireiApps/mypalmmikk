import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StorecommunicationPutPage } from './storecommunication-put.page';

describe('StorecommunicationPutPage', () => {
  let component: StorecommunicationPutPage;
  let fixture: ComponentFixture<StorecommunicationPutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorecommunicationPutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StorecommunicationPutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
