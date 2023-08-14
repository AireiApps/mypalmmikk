import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StocktakereportPage } from './stocktakereport.page';

describe('StocktakereportPage', () => {
  let component: StocktakereportPage;
  let fixture: ComponentFixture<StocktakereportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocktakereportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StocktakereportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
