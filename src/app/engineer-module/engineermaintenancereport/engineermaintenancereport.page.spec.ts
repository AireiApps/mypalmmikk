import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineermaintenancereportPage } from './engineermaintenancereport.page';

describe('EngineermaintenancereportPage', () => {
  let component: EngineermaintenancereportPage;
  let fixture: ComponentFixture<EngineermaintenancereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineermaintenancereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineermaintenancereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
