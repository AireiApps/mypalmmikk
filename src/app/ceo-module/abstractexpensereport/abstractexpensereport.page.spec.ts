import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbstractexpensereportPage } from './abstractexpensereport.page';

describe('AbstractexpensereportPage', () => {
  let component: AbstractexpensereportPage;
  let fixture: ComponentFixture<AbstractexpensereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractexpensereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbstractexpensereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
