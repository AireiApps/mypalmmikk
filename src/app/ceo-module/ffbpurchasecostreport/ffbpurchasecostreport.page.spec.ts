import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FfbpurchasecostreportPage } from './ffbpurchasecostreport.page';

describe('FfbpurchasecostreportPage', () => {
  let component: FfbpurchasecostreportPage;
  let fixture: ComponentFixture<FfbpurchasecostreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfbpurchasecostreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FfbpurchasecostreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
