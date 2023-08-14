import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineerproductioncommentsPage } from './engineerproductioncomments.page';

describe('EngineerproductioncommentsPage', () => {
  let component: EngineerproductioncommentsPage;
  let fixture: ComponentFixture<EngineerproductioncommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerproductioncommentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineerproductioncommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
