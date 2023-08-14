import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecurityroundshistoryPage } from './securityroundshistory.page';

describe('SecurityroundshistoryPage', () => {
  let component: SecurityroundshistoryPage;
  let fixture: ComponentFixture<SecurityroundshistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityroundshistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityroundshistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
