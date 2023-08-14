import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailTransPage } from './detail-trans.page';

describe('DetailTransPage', () => {
  let component: DetailTransPage;
  let fixture: ComponentFixture<DetailTransPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTransPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailTransPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
