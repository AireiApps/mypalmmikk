import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerproductioncommentsPage } from './managerproductioncomments.page';

describe('ManagerproductioncommentsPage', () => {
  let component: ManagerproductioncommentsPage;
  let fixture: ComponentFixture<ManagerproductioncommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerproductioncommentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerproductioncommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
