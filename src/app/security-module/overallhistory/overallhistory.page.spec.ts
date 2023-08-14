import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverallhistoryPage } from './overallhistory.page';

describe('OverallhistoryPage', () => {
  let component: OverallhistoryPage;
  let fixture: ComponentFixture<OverallhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverallhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
