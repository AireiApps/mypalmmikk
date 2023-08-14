import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmprofilePage } from './emprofile.page';

describe('EmprofilePage', () => {
  let component: EmprofilePage;
  let fixture: ComponentFixture<EmprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
