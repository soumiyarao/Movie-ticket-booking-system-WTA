import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatmatrixComponent } from './seatmatrix.component';

describe('SeatmatrixComponent', () => {
  let component: SeatmatrixComponent;
  let fixture: ComponentFixture<SeatmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
