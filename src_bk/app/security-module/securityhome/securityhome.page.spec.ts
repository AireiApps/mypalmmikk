import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityhomePage } from './securityhome.page';

describe('SecurityhomePage', () => {
  let component: SecurityhomePage;
  let fixture: ComponentFixture<SecurityhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
