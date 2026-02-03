import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Karnataka } from './karnataka';

describe('Karnataka', () => {
  let component: Karnataka;
  let fixture: ComponentFixture<Karnataka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Karnataka]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Karnataka);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
