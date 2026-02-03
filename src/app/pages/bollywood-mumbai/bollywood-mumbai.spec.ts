import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodMumbai } from './bollywood-mumbai';

describe('BollywoodMumbai', () => {
  let component: BollywoodMumbai;
  let fixture: ComponentFixture<BollywoodMumbai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BollywoodMumbai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BollywoodMumbai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
