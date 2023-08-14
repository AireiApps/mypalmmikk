import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LubricantAddPage } from './lubricant-add.page';

describe('LubricantAddPage', () => {
  let component: LubricantAddPage;
  let fixture: ComponentFixture<LubricantAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LubricantAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LubricantAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
