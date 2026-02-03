import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goa } from './goa';

describe('Goa', () => {
  let component: Goa;
  let fixture: ComponentFixture<Goa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Goa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
