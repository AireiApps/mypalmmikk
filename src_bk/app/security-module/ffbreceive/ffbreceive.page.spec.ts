import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FfbreceivePage } from './ffbreceive.page';

describe('FfbreceivePage', () => {
  let component: FfbreceivePage;
  let fixture: ComponentFixture<FfbreceivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfbreceivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FfbreceivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
