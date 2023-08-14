import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilerInsertPage } from './boiler-insert.page';

describe('BoilerInsertPage', () => {
  let component: BoilerInsertPage;
  let fixture: ComponentFixture<BoilerInsertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerInsertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerInsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
