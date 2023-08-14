import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunicationhomePage } from './communicationhome.page';

describe('CommunicationhomePage', () => {
  let component: CommunicationhomePage;
  let fixture: ComponentFixture<CommunicationhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunicationhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
