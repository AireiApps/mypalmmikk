import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LubricantEditPage } from './lubricant-edit.page';

describe('LubricantEditPage', () => {
  let component: LubricantEditPage;
  let fixture: ComponentFixture<LubricantEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LubricantEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LubricantEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
