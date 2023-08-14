import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerReportsHomePage } from './manager-reports-home.page';

describe('ManagerReportsHomePage', () => {
  let component: ManagerReportsHomePage;
  let fixture: ComponentFixture<ManagerReportsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerReportsHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerReportsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
