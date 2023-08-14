import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OthersuppliersearchPage } from './othersuppliersearch.page';

describe('OthersuppliersearchPage', () => {
  let component: OthersuppliersearchPage;
  let fixture: ComponentFixture<OthersuppliersearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersuppliersearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OthersuppliersearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
