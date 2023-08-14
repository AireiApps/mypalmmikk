import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MachinerunninghourPage } from './machinerunninghour.page';

describe('MachinerunninghourPage', () => {
  let component: MachinerunninghourPage;
  let fixture: ComponentFixture<MachinerunninghourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinerunninghourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MachinerunninghourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
