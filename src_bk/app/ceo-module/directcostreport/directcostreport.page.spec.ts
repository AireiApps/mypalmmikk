import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectcostreportPage } from './directcostreport.page';

describe('DirectcostreportPage', () => {
  let component: DirectcostreportPage;
  let fixture: ComponentFixture<DirectcostreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectcostreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectcostreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
