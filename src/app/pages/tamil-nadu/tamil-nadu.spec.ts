import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilNadu } from './tamil-nadu';

describe('TamilNadu', () => {
  let component: TamilNadu;
  let fixture: ComponentFixture<TamilNadu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TamilNadu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamilNadu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
