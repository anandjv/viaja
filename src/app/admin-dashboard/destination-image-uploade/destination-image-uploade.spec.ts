import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationImageUploade } from './destination-image-uploade';

describe('DestinationImageUploade', () => {
  let component: DestinationImageUploade;
  let fixture: ComponentFixture<DestinationImageUploade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationImageUploade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationImageUploade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
