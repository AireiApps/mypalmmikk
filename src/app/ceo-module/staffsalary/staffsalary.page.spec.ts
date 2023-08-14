import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StaffsalaryPage } from './staffsalary.page';

describe('StaffsalaryPage', () => {
  let component: StaffsalaryPage;
  let fixture: ComponentFixture<StaffsalaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsalaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StaffsalaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
