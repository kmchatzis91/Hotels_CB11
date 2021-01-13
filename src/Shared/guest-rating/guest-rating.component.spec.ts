import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRatingComponent } from './guest-rating.component';

describe('GuestRatingComponent', () => {
  let component: GuestRatingComponent;
  let fixture: ComponentFixture<GuestRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
