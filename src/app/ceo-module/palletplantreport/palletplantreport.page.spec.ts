import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PalletplantreportPage } from './palletplantreport.page';

describe('PalletplantreportPage', () => {
  let component: PalletplantreportPage;
  let fixture: ComponentFixture<PalletplantreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalletplantreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PalletplantreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
