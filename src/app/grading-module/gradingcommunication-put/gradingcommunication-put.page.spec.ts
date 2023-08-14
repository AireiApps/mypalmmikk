import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradingcommunicationPutPage } from './gradingcommunication-put.page';

describe('GradingcommunicationPutPage', () => {
  let component: GradingcommunicationPutPage;
  let fixture: ComponentFixture<GradingcommunicationPutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingcommunicationPutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradingcommunicationPutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
