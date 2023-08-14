import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecuritycommunicationShowPage } from './securitycommunication-show.page';

describe('SecuritycommunicationShowPage', () => {
  let component: SecuritycommunicationShowPage;
  let fixture: ComponentFixture<SecuritycommunicationShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritycommunicationShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecuritycommunicationShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
