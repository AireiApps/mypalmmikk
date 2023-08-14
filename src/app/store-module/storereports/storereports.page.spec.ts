import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StorereportsPage } from './storereports.page';

describe('StorereportsPage', () => {
  let component: StorereportsPage;
  let fixture: ComponentFixture<StorereportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorereportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StorereportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
