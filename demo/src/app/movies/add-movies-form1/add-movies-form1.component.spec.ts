import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoviesForm1Component } from './add-movies-form1.component';

describe('AddMoviesForm1Component', () => {
  let component: AddMoviesForm1Component;
  let fixture: ComponentFixture<AddMoviesForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoviesForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoviesForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
