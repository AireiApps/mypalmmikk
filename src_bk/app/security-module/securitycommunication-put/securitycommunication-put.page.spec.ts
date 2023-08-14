import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecuritycommunicationPutPage } from './securitycommunication-put.page';

describe('SecuritycommunicationPutPage', () => {
  let component: SecuritycommunicationPutPage;
  let fixture: ComponentFixture<SecuritycommunicationPutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritycommunicationPutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecuritycommunicationPutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
