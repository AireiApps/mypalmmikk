import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClosingstockreportPage } from './closingstockreport.page';

describe('ClosingstockreportPage', () => {
  let component: ClosingstockreportPage;
  let fixture: ComponentFixture<ClosingstockreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosingstockreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClosingstockreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
