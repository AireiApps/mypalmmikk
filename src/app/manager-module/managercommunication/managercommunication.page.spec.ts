import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagercommunicationPage } from './managercommunication.page';

describe('ManagercommunicationPage', () => {
  let component: ManagercommunicationPage;
  let fixture: ComponentFixture<ManagercommunicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagercommunicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagercommunicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
