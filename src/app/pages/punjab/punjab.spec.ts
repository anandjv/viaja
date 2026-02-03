import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punjab } from './punjab';

describe('Punjab', () => {
  let component: Punjab;
  let fixture: ComponentFixture<Punjab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punjab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Punjab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
