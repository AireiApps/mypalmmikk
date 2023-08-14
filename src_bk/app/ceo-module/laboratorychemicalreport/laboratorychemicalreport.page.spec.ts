import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratorychemicalreportPage } from './laboratorychemicalreport.page';

describe('LaboratorychemicalreportPage', () => {
  let component: LaboratorychemicalreportPage;
  let fixture: ComponentFixture<LaboratorychemicalreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorychemicalreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratorychemicalreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
