import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoilerLogEntryPage } from './boiler-log-entry.page';

describe('BoilerLogEntryPage', () => {
  let component: BoilerLogEntryPage;
  let fixture: ComponentFixture<BoilerLogEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoilerLogEntryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerLogEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
