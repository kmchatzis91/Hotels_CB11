import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAndSortComponent } from './map-and-sort.component';

describe('MapAndSortComponent', () => {
  let component: MapAndSortComponent;
  let fixture: ComponentFixture<MapAndSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapAndSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAndSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
