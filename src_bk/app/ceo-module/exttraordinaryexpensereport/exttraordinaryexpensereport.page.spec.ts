import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExttraordinaryexpensereportPage } from './exttraordinaryexpensereport.page';

describe('ExttraordinaryexpensereportPage', () => {
  let component: ExttraordinaryexpensereportPage;
  let fixture: ComponentFixture<ExttraordinaryexpensereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExttraordinaryexpensereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExttraordinaryexpensereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
