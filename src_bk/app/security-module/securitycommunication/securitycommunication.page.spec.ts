import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecuritycommunicationPage } from './securitycommunication.page';

describe('SecuritycommunicationPage', () => {
  let component: SecuritycommunicationPage;
  let fixture: ComponentFixture<SecuritycommunicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritycommunicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecuritycommunicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
