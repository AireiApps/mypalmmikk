import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilerviewPage } from './boilerview.page';

describe('BoilerviewPage', () => {
  let component: BoilerviewPage;
  let fixture: ComponentFixture<BoilerviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
