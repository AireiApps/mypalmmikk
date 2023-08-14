import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradingManualformPage } from './grading-manualform.page';

describe('GradingManualformPage', () => {
  let component: GradingManualformPage;
  let fixture: ComponentFixture<GradingManualformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingManualformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradingManualformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
