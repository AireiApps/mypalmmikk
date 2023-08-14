import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsumablesreportPage } from './consumablesreport.page';

describe('ConsumablesreportPage', () => {
  let component: ConsumablesreportPage;
  let fixture: ComponentFixture<ConsumablesreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumablesreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumablesreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
