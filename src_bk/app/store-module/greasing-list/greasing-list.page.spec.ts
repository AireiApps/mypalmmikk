import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreasingListPage } from './greasing-list.page';

describe('GreasingListPage', () => {
  let component: GreasingListPage;
  let fixture: ComponentFixture<GreasingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreasingListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreasingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
