import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JournalentryreportPage } from './journalentryreport.page';

describe('JournalentryreportPage', () => {
  let component: JournalentryreportPage;
  let fixture: ComponentFixture<JournalentryreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalentryreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JournalentryreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
