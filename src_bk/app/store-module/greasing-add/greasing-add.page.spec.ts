import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreasingAddPage } from './greasing-add.page';

describe('GreasingAddPage', () => {
  let component: GreasingAddPage;
  let fixture: ComponentFixture<GreasingAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreasingAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreasingAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
