import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FfbformPage } from './ffbform.page';

describe('FfbformPage', () => {
  let component: FfbformPage;
  let fixture: ComponentFixture<FfbformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfbformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FfbformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
