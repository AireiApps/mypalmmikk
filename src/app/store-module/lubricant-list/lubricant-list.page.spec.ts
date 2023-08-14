import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LubricantListPage } from './lubricant-list.page';

describe('LubricantListPage', () => {
  let component: LubricantListPage;
  let fixture: ComponentFixture<LubricantListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LubricantListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LubricantListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
