import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngineerBreakdownListPage } from './engineer-breakdown-list.page';

describe('EngineerBreakdownListPage', () => {
  let component: EngineerBreakdownListPage;
  let fixture: ComponentFixture<EngineerBreakdownListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineerBreakdownListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngineerBreakdownListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
