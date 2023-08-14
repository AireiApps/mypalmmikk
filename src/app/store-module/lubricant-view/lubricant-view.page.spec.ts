import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LubricantViewPage } from './lubricant-view.page';

describe('LubricantViewPage', () => {
  let component: LubricantViewPage;
  let fixture: ComponentFixture<LubricantViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LubricantViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LubricantViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
