import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telangana } from './telangana';

describe('Telangana', () => {
  let component: Telangana;
  let fixture: ComponentFixture<Telangana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Telangana]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Telangana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
