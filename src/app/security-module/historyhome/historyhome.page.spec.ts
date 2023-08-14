import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryhomePage } from './historyhome.page';

describe('HistoryhomePage', () => {
  let component: HistoryhomePage;
  let fixture: ComponentFixture<HistoryhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
