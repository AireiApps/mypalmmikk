import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FfblistPage } from './ffblist.page';

describe('FfblistPage', () => {
  let component: FfblistPage;
  let fixture: ComponentFixture<FfblistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfblistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FfblistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
