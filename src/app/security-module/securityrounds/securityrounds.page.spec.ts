import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityroundsPage } from './securityrounds.page';

describe('SecurityroundsPage', () => {
  let component: SecurityroundsPage;
  let fixture: ComponentFixture<SecurityroundsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityroundsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityroundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
