import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpoformPage } from './cpoform.page';

describe('CpoformPage', () => {
  let component: CpoformPage;
  let fixture: ComponentFixture<CpoformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpoformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpoformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
