import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompliancePage } from './compliance.page';

describe('CompliancePage', () => {
  let component: CompliancePage;
  let fixture: ComponentFixture<CompliancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompliancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
