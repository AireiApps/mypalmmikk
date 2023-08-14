import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotebalancesheetreportPage } from './notebalancesheetreport.page';

describe('NotebalancesheetreportPage', () => {
  let component: NotebalancesheetreportPage;
  let fixture: ComponentFixture<NotebalancesheetreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebalancesheetreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotebalancesheetreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
