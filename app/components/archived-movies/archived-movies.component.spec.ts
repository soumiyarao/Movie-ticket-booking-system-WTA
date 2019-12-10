import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedMoviesComponent } from './archived-movies.component';

describe('ArchivedMoviesComponent', () => {
  let component: ArchivedMoviesComponent;
  let fixture: ComponentFixture<ArchivedMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
