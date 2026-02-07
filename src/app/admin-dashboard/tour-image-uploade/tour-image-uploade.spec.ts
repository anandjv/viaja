import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourImageUploade } from './tour-image-uploade';

describe('TourImageUploade', () => {
  let component: TourImageUploade;
  let fixture: ComponentFixture<TourImageUploade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourImageUploade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourImageUploade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
