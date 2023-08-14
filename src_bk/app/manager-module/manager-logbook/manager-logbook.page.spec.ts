import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerLogbookPage } from './manager-logbook.page';

describe('ManagerLogbookPage', () => {
  let component: ManagerLogbookPage;
  let fixture: ComponentFixture<ManagerLogbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerLogbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerLogbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
