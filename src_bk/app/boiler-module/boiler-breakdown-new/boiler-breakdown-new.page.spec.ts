import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilerBreakdownNewPage } from './boiler-breakdown-new.page';

describe('BoilerBreakdownNewPage', () => {
  let component: BoilerBreakdownNewPage;
  let fixture: ComponentFixture<BoilerBreakdownNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerBreakdownNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerBreakdownNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
