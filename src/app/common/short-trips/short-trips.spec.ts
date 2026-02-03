import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTrips } from './short-trips';

describe('ShortTrips', () => {
  let component: ShortTrips;
  let fixture: ComponentFixture<ShortTrips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortTrips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortTrips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
