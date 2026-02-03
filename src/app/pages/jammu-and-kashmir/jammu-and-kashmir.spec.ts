import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JammuAndKashmir } from './jammu-and-kashmir';

describe('JammuAndKashmir', () => {
  let component: JammuAndKashmir;
  let fixture: ComponentFixture<JammuAndKashmir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JammuAndKashmir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JammuAndKashmir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
