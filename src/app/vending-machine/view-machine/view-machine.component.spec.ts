import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMachineComponent } from './view-machine.component';

describe('ViewMachineComponent', () => {
  let component: ViewMachineComponent;
  let fixture: ComponentFixture<ViewMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMachineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
