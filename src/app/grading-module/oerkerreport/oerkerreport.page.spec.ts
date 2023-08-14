import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OerkerreportPage } from './oerkerreport.page';

describe('OerkerreportPage', () => {
  let component: OerkerreportPage;
  let fixture: ComponentFixture<OerkerreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OerkerreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OerkerreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
