import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualffbformPage } from './manualffbform.page';

describe('ManualffbformPage', () => {
  let component: ManualffbformPage;
  let fixture: ComponentFixture<ManualffbformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualffbformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManualffbformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
