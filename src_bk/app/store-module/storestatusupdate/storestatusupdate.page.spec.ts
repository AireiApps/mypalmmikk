import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StorestatusupdatePage } from './storestatusupdate.page';

describe('StorestatusupdatePage', () => {
  let component: StorestatusupdatePage;
  let fixture: ComponentFixture<StorestatusupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorestatusupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StorestatusupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
