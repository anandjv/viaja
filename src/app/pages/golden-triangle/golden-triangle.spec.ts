import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenTriangle } from './golden-triangle';

describe('GoldenTriangle', () => {
  let component: GoldenTriangle;
  let fixture: ComponentFixture<GoldenTriangle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldenTriangle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenTriangle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
