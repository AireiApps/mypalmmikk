import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilercommunicationShowPage } from './boilercommunication-show.page';

describe('BoilercommunicationShowPage', () => {
  let component: BoilercommunicationShowPage;
  let fixture: ComponentFixture<BoilercommunicationShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilercommunicationShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilercommunicationShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
