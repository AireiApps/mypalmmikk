import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradinghomePage } from './gradinghome.page';

describe('GradinghomePage', () => {
  let component: GradinghomePage;
  let fixture: ComponentFixture<GradinghomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradinghomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradinghomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
