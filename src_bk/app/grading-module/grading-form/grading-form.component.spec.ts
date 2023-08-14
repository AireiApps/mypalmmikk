import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradingFormComponent } from './grading-form.component';

describe('GradingFormComponent', () => {
  let component: GradingFormComponent;
  let fixture: ComponentFixture<GradingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradingFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
