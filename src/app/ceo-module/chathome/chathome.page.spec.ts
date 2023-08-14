import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChathomePage } from './chathome.page';

describe('ChathomePage', () => {
  let component: ChathomePage;
  let fixture: ComponentFixture<ChathomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChathomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChathomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
