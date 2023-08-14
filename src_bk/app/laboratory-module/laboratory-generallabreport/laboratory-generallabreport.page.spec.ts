import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratoryGenerallabreportPage } from './laboratory-generallabreport.page';

describe('LaboratoryGenerallabreportPage', () => {
  let component: LaboratoryGenerallabreportPage;
  let fixture: ComponentFixture<LaboratoryGenerallabreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryGenerallabreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratoryGenerallabreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
