import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StaffovertimePage } from './staffovertime.page';

describe('StaffovertimePage', () => {
  let component: StaffovertimePage;
  let fixture: ComponentFixture<StaffovertimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffovertimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StaffovertimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
