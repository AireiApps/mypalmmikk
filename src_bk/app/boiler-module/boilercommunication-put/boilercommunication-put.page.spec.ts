import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilercommunicationPutPage } from './boilercommunication-put.page';

describe('BoilercommunicationPutPage', () => {
  let component: BoilercommunicationPutPage;
  let fixture: ComponentFixture<BoilercommunicationPutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilercommunicationPutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilercommunicationPutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
