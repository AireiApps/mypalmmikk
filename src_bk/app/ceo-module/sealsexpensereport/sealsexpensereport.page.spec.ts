import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SealsexpensereportPage } from './sealsexpensereport.page';

describe('SealsexpensereportPage', () => {
  let component: SealsexpensereportPage;
  let fixture: ComponentFixture<SealsexpensereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SealsexpensereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SealsexpensereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
