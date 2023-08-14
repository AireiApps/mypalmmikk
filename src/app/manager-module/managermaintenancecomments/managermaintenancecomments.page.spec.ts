import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagermaintenancecommentsPage } from './managermaintenancecomments.page';

describe('ManagermaintenancecommentsPage', () => {
  let component: ManagermaintenancecommentsPage;
  let fixture: ComponentFixture<ManagermaintenancecommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagermaintenancecommentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagermaintenancecommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
