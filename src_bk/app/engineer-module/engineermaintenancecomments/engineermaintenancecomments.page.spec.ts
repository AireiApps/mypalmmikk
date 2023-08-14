import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineermaintenancecommentsPage } from './engineermaintenancecomments.page';

describe('EngineermaintenancecommentsPage', () => {
  let component: EngineermaintenancecommentsPage;
  let fixture: ComponentFixture<EngineermaintenancecommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineermaintenancecommentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineermaintenancecommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
