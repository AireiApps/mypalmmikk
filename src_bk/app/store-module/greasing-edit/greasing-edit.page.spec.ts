import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreasingEditPage } from './greasing-edit.page';

describe('GreasingEditPage', () => {
  let component: GreasingEditPage;
  let fixture: ComponentFixture<GreasingEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreasingEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreasingEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
